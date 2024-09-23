'use server';
import { devnetTemplate } from '@/lib/constants';
import { redirect } from 'next/navigation';
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
const addressSchema = z.custom<string>(isAddress, 'Invalid Address');

const formSchema = z.object({
  rollupName: rollupNameSchema,
  chainId: z.string(),
  adminAddress: addressSchema,
  sequencerAddress: addressSchema,
  batcherAddress: addressSchema,
  proposerAddress: addressSchema,
});

export async function handleForm(prevState: any, formData: FormData) {
  const data = {
    rollupName: formData.get('rollup-name'),
    chainId: formData.get('chain-id'),
    adminAddress: formData.get('admin-address'),
    sequencerAddress: formData.get('sequencer-address'),
    batcherAddress: formData.get('batcher-address'),
    proposerAddress: formData.get('proposer-address'),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten(),
    };
  }

  const template = devnetTemplate;
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
