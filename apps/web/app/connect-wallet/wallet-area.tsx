'use client';

import CopyIcon from '../../public/icon-square-2-stack.svg';
import CopiedIcon from '../../public/icon-copy-square-2-stack.svg';
import DisconnectIcon from '../../public/icon-arrow-left-start-on-rectangle.svg';
import Image from 'next/image';
import { useState } from 'react';
import { copyToClipboard } from '@/lib/utils';
import clsx from 'clsx';
import { useDisconnect } from 'wagmi';
import { ThemeSwitchBtn } from '@/components/buttons/theme-switch-btn';

type addressType = `0x${string}` | undefined;

interface WalletAreaProps {
  address: addressType;
}

function trimAddress(address: addressType): string {
  if (address === undefined) {
    return 'undefined';
  }
  const start = address.slice(0, 6);
  const end = address.slice(-4);
  return `${start}...${end}`;
}

export function WalletArea({ address }: WalletAreaProps) {
  const [copied, setCopied] = useState(false);
  const { connectors, disconnect } = useDisconnect();

  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="wallet-btn list-none hover:cursor-pointer">
        {trimAddress(address)}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-50 w-auto -translate-x-[25px] translate-y-2 rounded-lg bg-white px-[10px] py-[10.5px] ring-2 ring-[#E8EDF2] dark:bg-black dark:ring-[#1D2838]"
      >
        <li>
          <button
            onClick={() => {
              const text = address as string;
              copyToClipboard(text, setCopied);
            }}
            disabled={copied}
            className="flex w-full gap-2 rounded-lg px-2 py-[7.5px] hover:bg-slate-100 dark:hover:bg-base-200"
          >
            {copied ? (
              <Image src={CopiedIcon} alt="copied" />
            ) : (
              <Image src={CopyIcon} alt="copy" className="light:invert" />
            )}
            <span
              className={clsx(
                {
                  'text-tokamak-blue': copied,
                },
                'text-[13px] tracking-[0.26px]',
              )}
            >
              Copy Address
            </span>
          </button>
        </li>
        <li>
          {connectors.map((connector) => {
            return connector.type == 'metaMask' ? (
              <button
                onClick={() => {
                  disconnect({ connector });
                }}
                key={connector.id}
                className="flex w-full gap-2 rounded-lg px-2 py-[7.5px] hover:bg-slate-100 dark:hover:bg-base-200"
              >
                <Image src={DisconnectIcon} alt="disconnect" className="light:invert" />
                <span className="whitespace-nowrap text-[13px] tracking-[0.26px]">Disconnect</span>
              </button>
            ) : null;
          })}
        </li>
        <li>
          <ThemeSwitchBtn />
        </li>
      </ul>
    </div>
  );
}
