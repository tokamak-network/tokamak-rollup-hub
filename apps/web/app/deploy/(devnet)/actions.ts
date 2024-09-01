'use server';
import { isAddress } from 'viem';
import { z } from 'zod';

const Address = z.custom<string>(isAddress, "Invalid Address")
const formSchema = z.object({
    rollupName: z.string(),
    chainId: z.string(),
    adminAddress: Address,
    sequencerAddress: Address,
    batcherAddress: Address,
    proposerAddress: Address,
})

export async function handleForm(prevState: any, formData: FormData) {
    const data = {
        rollupName: formData.get('rollup-name'),
        chainId: formData.get('chain-id'),
        adminAddress: formData.get('admin-address'),
        sequencerAddress: formData.get('sequencer-address'),
        batcherAddress: formData.get('batcher-address'),
        proposerAddress: formData.get('proposer-address'),
    }
    const result = formSchema.safeParse(data);
    if (!result.success) {
        console.log(result.error.flatten())
        return result.error.flatten()
    }
    // await new Promise((resolve) => setTimeout(resolve, 2000))
}