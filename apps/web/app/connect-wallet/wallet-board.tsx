'use client';

import Image from 'next/image';
import ThanosSymbol from '../../public/symbol-thanos.svg';
import DangerIcon from '../../public/icon-danger.svg';
import { useAccount, useChainId } from 'wagmi';
import { useEffect, useState } from 'react';
import { WalletArea } from './wallet-area';
import { thanosSepolia } from '@/lib/chains';
import clsx from 'clsx';
import { ConnectWalletBtn } from '@/components/buttons/connect-wallet-btn';
import { ChangeNetworkToThanos } from '@/components/warnings/network';

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
        <div
          className={clsx(
            {
              'ring-tokamak-blue': isThanos,
            },
            'flex items-center justify-center rounded-full p-[6px] ring-2 ring-[#1D2838]',
          )}
        >
          <Image src={isThanos ? ThanosSymbol : DangerIcon} alt="Thanos" />
        </div>
      ) : null}
      {isConnected && !isThanos ? <ChangeNetworkToThanos /> : null}
      {isConnected ? <WalletArea address={address} /> : <ConnectWalletBtn />}
    </div>
  );
}
