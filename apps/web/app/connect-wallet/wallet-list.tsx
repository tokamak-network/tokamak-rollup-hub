'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import MetamaskIcon from '../../public/icon-metamask.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAccount, useConnect } from 'wagmi';
import { useEffect, useState } from 'react';

export default function WalletList() {
  const router = useRouter();
  const onCloseClick = () => {
    router.back();
  };

  const { connectors, connect } = useConnect();
  const { isConnected } = useAccount();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (isConnected) {
      router.back();
    }
  }, [isConnected, router]);

  if (!ready || connectors.length == 0) {
    return null;
  }

  return (
    <div className="flex w-full max-w-[340px] flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-semibold">Connect Wallet</h1>
        <button onClick={onCloseClick}>
          <XMarkIcon className="-mr-1 size-6 fill-[#9A9AAF] text-trh-gray-close-modal dark:fill-[#64646F]" />
        </button>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        {connectors.map((connector) => {
          return connector.type == 'metaMask' ? (
            <button
              key={connector.id}
              onClick={() => connect({ connector })}
              className="rounded-lg p-[15px] ring-1 ring-[#E8EDF2] transition-colors hover:ring-tokamak-blue dark:bg-[#1F2128] dark:ring-[#313442]"
            >
              <div className="flex items-center gap-4">
                <Image src={MetamaskIcon} alt="metamask" />
                <div className="flex flex-col leading-[18px]">
                  <h3 className="flex justify-start font-semibold">{connector.name}</h3>
                  <p className="text-sm text-[#7E7E8F] dark:text-[#8B8B93]">
                    Easy-to-use browser extension.
                  </p>
                </div>
              </div>
            </button>
          ) : null;
        })}
      </div>
      <p className="mt-6 text-sm text-[#7E7E8F] dark:text-[#C1C2D9]">
        <span>New to Ethereum? </span>
        <Link href="https://learn.metamask.io/lessons/what-is-a-crypto-wallet" rel="noopener noreferrer" target="_blank">
          <span className="underline">Learn more about wallets</span>
        </Link>
      </p>
    </div>
  );
}
