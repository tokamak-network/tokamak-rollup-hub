import { type Chain } from 'viem';

export const thanosSepolia = {
  id: 111551119090,
  name: 'Thanos-sepolia',
  nativeCurrency: { name: 'Tokamak Network Token', symbol: 'TON', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.thanos-sepolia.tokamak.network'] },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://explorer.thanos-sepolia.tokamak.network' },
  },
} as const satisfies Chain;
