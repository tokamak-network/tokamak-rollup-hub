'use server';
import { mainnetTemplate } from '@/lib/constants';
import { ethers } from 'ethers';
import { isAddress } from 'viem';
import { z } from 'zod';

const rollupNameSchema = z
  .string()
  .min(2, 'Rollup Name should contain at least 2 characters')
  .refine((s) => !s.includes(' '), 'No Space in Rollup Name')
  .refine(
    (s) => /^[a-zA-Z]+[-]?[a-zA-Z ]+$/.test(s ?? ''),
    'Rollup Name should contain only alphabets',
  );

const chainIdSchema = z
  .string()
  .refine((value) => /^\d+$/.test(value), { message: 'Chain ID must be a numeric string.' })
  .refine((value) => Number(value) > 0, { message: 'Chain ID must be greater than 0.' })
  .refine((value) => value.length <= 38, { message: 'Chain ID must be 38 characters or fewer.' });

const addressSchema = z.custom<string>(isAddress, 'Invalid Address');

const formSchema = z.object({
  rollupName: rollupNameSchema,
  chainId: chainIdSchema,
  nativeToken: addressSchema,
  adminAddress: addressSchema,
  sequencerAddress: addressSchema,
  batcherAddress: addressSchema,
  proposerAddress: addressSchema,
  challengerAddress: addressSchema,
});

const ERC20_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    type: 'function',
  },
];

async function validateChainId(
  chainId: string,
): Promise<{ isValid: boolean; fieldErrors?: { chainId?: string[] } }> {
  try {
    const response = await fetch(`https://chainlist.org/chain/${chainId}`);

    if (response.status === 404) {
      console.error(`Chain ID ${chainId} does not exist on Chainlist.`);
      return { isValid: true };
    }

    if (response.ok) {
      console.error(`Chain ID exists: ${chainId}`);
      return {
        isValid: false,
        fieldErrors: {
          chainId: ['Chain ID already exists on Chainlist. Please choose a different one.'],
        },
      };
    }

    console.error(`Unexpected response status: ${response.status}`);
    return {
      isValid: false,
      fieldErrors: { chainId: ['Unexpected response from the server. Please try again later.'] },
    };
  } catch (error) {
    console.error('Error validating Chain ID:', error);
    return {
      isValid: false,
      fieldErrors: {
        chainId: ['Network error occurred while validating Chain ID. Please try again later.'],
      },
    };
  }
}

async function getTokenInfo(
  tokenAddress: string,
  rpcUrl: string,
): Promise<{
  isValid: boolean;
  data?: { nativeTokenName: string; nativeTokenSymbol: string };
  fieldErrors?: { nativeToken?: string[] };
}> {
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);

  try {
    const nativeTokenName = await tokenContract.name();
    const nativeTokenSymbol = await tokenContract.symbol();

    return {
      isValid: true,
      data: { nativeTokenName, nativeTokenSymbol },
    };
  } catch (error) {
    console.error('Error fetching token info:', error);

    return {
      isValid: false,
      fieldErrors: {
        nativeToken: ['Unable to fetch token information. Please verify the token address.'],
      },
    };
  }
}

async function getLatestBlockInfo(rpcUrl: string) {
  const provider = new ethers.JsonRpcProvider(rpcUrl);

  try {
    const latestBlock = await provider.getBlock('latest');

    if (!latestBlock) {
      throw new Error('Latest block is null. Unable to fetch block information.');
    }

    return { hash: latestBlock.hash, timestamp: latestBlock.timestamp };
  } catch (error) {
    console.error('Error fetching latest block info:', error);
    throw new Error('Unable to fetch the latest block information.');
  }
}

export async function handleForm(prevState: any, formData: FormData) {
  const data = {
    rollupName: formData.get('rollup-name'),
    chainId: formData.get('chain-id'),
    nativeToken: formData.get('native-token'),
    adminAddress: formData.get('admin-address'),
    sequencerAddress: formData.get('sequencer-address'),
    batcherAddress: formData.get('batcher-address'),
    proposerAddress: formData.get('proposer-address'),
    challengerAddress: formData.get('challenger-address'),
  };
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten(),
    };
  }

  const chainIdValidation = await validateChainId(data.chainId as string);

  if (!chainIdValidation.isValid) {
    return {
      success: false,
      errors: {
        fieldErrors: {
          ...chainIdValidation.fieldErrors,
        },
      },
    };
  }

  const rpcUrl = process.env.CHAIN_RPC_URL as string;
  const tokenInfo = await getTokenInfo(data.nativeToken as string, rpcUrl);

  if (!tokenInfo.isValid) {
    return {
      success: false,
      errors: {
        fieldErrors: {
          ...tokenInfo.fieldErrors,
        },
      },
    };
  }

  const { nativeTokenName, nativeTokenSymbol } = tokenInfo.data!;

  const { hash: l1StartingBlockHash, timestamp: l1StartingBlockTimestamp } =
    await getLatestBlockInfo(rpcUrl);

  const template = mainnetTemplate;
  template['l2ChainID'] = +(data.chainId as string);

  template['nativeTokenName'] = nativeTokenName;
  template['nativeTokenSymbol'] = nativeTokenSymbol;
  template['nativeTokenAddress'] = data.nativeToken as string;

  template['finalSystemOwner'] = data.adminAddress as string;
  template['superchainConfigGuardian'] = data.adminAddress as string;
  template['l2OutputOracleChallenger'] = data.adminAddress as string;
  template['proxyAdminOwner'] = data.adminAddress as string;
  template['baseFeeVaultRecipient'] = data.adminAddress as string;
  template['l1FeeVaultRecipient'] = data.adminAddress as string;
  template['sequencerFeeVaultRecipient'] = data.adminAddress as string;
  template['governanceTokenOwner'] = data.adminAddress as string;

  template['p2pSequencerAddress'] = data.sequencerAddress as string;
  template['batchSenderAddress'] = data.batcherAddress as string;
  template['l2OutputOracleProposer'] = data.proposerAddress as string;

  template['newPauser'] = data.adminAddress as string;
  template['newBlacklister'] = data.adminAddress as string;
  template['masterMinterOwner'] = data.adminAddress as string;
  template['fiatTokenOwner'] = data.adminAddress as string;
  template['uniswapV3FactoryOwner'] = data.adminAddress as string;

  const paddedChainId = (data.chainId as string).padStart(38, '0');
  template['batchInboxAddress'] = `0xff${paddedChainId}`;

  template['l1StartingBlockTag'] = l1StartingBlockHash as string;
  template['l2OutputOracleStartingTimestamp'] = l1StartingBlockTimestamp as number;

  return {
    success: true,
    template: template,
  };
}
