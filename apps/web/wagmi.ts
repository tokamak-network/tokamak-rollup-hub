import { mainnet, sepolia } from 'viem/chains';
import { createConfig, http } from 'wagmi';
import { metaMask } from 'wagmi/connectors';
import { thanosSepolia } from './lib/chains';

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia, thanosSepolia],
    connectors: [metaMask()],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [thanosSepolia.id]: http(),
    },
  });
}
