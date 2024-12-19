'use server';
import { mainnetTemplate } from '@/lib/constants';
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

const nativeTokenSchema = z
  .string()
  .min(2, 'Native Token Name must be at least 2 characters')
  .max(20, 'Native Token Name cannot exceed 20 characters')
  .regex(/^[A-Z]+$/, 'Native Token Name must be uppercase alphabets only');

const addressSchema = z.custom<string>(isAddress, 'Invalid Address');

const formSchema = z.object({
  rollupName: rollupNameSchema,
  chainId: z.string(),
  nativeToken: nativeTokenSchema,
  adminAddress: addressSchema,
  sequencerAddress: addressSchema,
  batcherAddress: addressSchema,
  proposerAddress: addressSchema,
  challengerAddress: addressSchema,
});

async function validateChainId(
  chainId: string,
): Promise<{ isValid: boolean; fieldErrors?: { chainId?: string[] } }> {
  try {
    const response = await fetch(`https://chainlist.org/chain/${chainId}`);

    if (response.status === 404) {
      console.log(`Chain ID ${chainId} does not exist on Chainlist.`);
      return { isValid: true };
    }

    if (response.ok) {
      console.log(`Chain ID exists: ${chainId}`);
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

  const template = mainnetTemplate;
  template['l2ChainID'] = +(data.chainId as string);

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
  template['l1GenesisBlockTimestamp'] = Math.floor(Date.now() / 1000).toString(16);

  return {
    success: true,
    template: template,
  };
}
