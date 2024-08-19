'use client';

import { XMarkIcon } from '@heroicons/react/24/solid';
import MetamaskIcon from '../../public/icon-metamask.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function WalletList() {
  const router = useRouter();
  const onCloseClick = () => {
    router.back();
  };

  return (
    <div className="flex w-full max-w-[340px] flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-semibold">Connect Wallet</h1>
        <button onClick={onCloseClick}>
          <XMarkIcon className="-mr-1 size-6 text-trh-gray-close-modal" />
        </button>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <div className="rounded-lg bg-[#1F2128] p-[15px] ring-1 ring-[#313442] transition-colors hover:cursor-pointer hover:ring-tokamak-blue">
          <div className="flex items-center gap-4">
            <Image src={MetamaskIcon} />
            <div className="flex flex-col leading-[18px]">
              <h3 className="font-semibold">Connect Wallet</h3>
              <p className="text-sm text-[#8B8B93]">Easy-to-use browser extension.</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-sm text-[#C1C2D9]">
        <span>New to Ethereum? </span>
        <Link href="/">
          <span className="underline">Learn more about wallets</span>
        </Link>
      </p>
    </div>
  );
}
