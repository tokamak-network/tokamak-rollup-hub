'use client';
import { useAccount, useChainId } from 'wagmi';
import { useEffect, useState } from 'react';
import { WalletArea } from './wallet-area';
import { thanosSepolia } from '@/lib/chains';
import { ConnectWalletBtn } from '@/components/buttons/connect-wallet-btn';
import { ChangeNetworkToThanos } from '@/components/warnings/network';
import { SwitchNetwork } from './switch-network';

export function WalletBoard() {
  const { isConnected, address } = useAccount();
  const [ready, setReady] = useState(false);
  const [isThanos, setIsThanos] = useState(false);
  const chainId = useChainId();

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (chainId === thanosSepolia.id) {
      setIsThanos(true);
    } else {
      setIsThanos(false);
    }
  }, [chainId]);

  if (!ready) {
    return null;
  }

  return (
    <div className="relative flex items-center gap-4">
      {isConnected ? (
        <SwitchNetwork isThanos={isThanos} />
      ) : null}
      {isConnected && !isThanos ? <ChangeNetworkToThanos /> : null}
      {isConnected ? <WalletArea address={address} /> : <ConnectWalletBtn />}
    </div>
  );
}
