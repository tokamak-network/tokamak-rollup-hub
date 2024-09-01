'use server';
import { devnetTemplate } from '@/lib/constants';
import { redirect } from 'next/navigation';
import { isAddress } from 'viem';
import { z } from 'zod';

const Address = z.custom<string>(isAddress, 'Invalid Address');
const formSchema = z.object({
  rollupName: z.string(),
  chainId: z.string(),
  adminAddress: Address,
  sequencerAddress: Address,
  batcherAddress: Address,
  proposerAddress: Address,
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
    console.log(result.error.flatten());
    return result.error.flatten();
  }

  let template = devnetTemplate;
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

  redirect(`/deploy/local?template=${encodeURIComponent(JSON.stringify(template))}`);
}
