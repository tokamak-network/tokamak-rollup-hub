'use client';
import { useRouter } from 'next/navigation';

export function ConnectWalletBtn() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push('/connect-wallet');
      }}
      className="wallet-btn"
    >
      Connect Wallet
    </button>
  );
}
