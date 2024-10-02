'use client';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { WalletArea } from './wallet-area';
import { ConnectWalletBtn } from '@/components/buttons/connect-wallet-btn';
import { SwitchNetwork } from './switch-network';

export function WalletBoard() {
  const { isConnected, address } = useAccount();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <div className="relative flex items-center gap-4">
      {isConnected ? <SwitchNetwork /> : null}
      {isConnected ? <WalletArea address={address} /> : <ConnectWalletBtn />}
    </div>
  );
}
