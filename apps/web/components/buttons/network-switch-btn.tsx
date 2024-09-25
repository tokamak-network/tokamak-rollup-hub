import React from 'react';
import { ThanosCircleSymbol } from '../symbols/thanos';
import clsx from 'clsx';

interface NetworkSwitchBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  networkType: 'mainnet' | 'testnet';
  isDisabled: boolean;
}

export const NetworkSwitchBtn: React.FC<NetworkSwitchBtnProps> = ({
  children,
  networkType,
  isDisabled,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      className={clsx(
        {
          'opacity-50': isDisabled,
          'hover:ring-tokamak-blue': !isDisabled,
        },
        'flex w-full items-center gap-4 rounded-lg px-3 py-[6px] ring-1 ring-[#E8EDF2] focus:bg-[#F5F5FA] dark:ring-[#313442] dark:focus:bg-[#1F2128]',
      )}
      {...props}
    >
      <ThanosCircleSymbol networkType={networkType} />
      {children}
    </button>
  );
};
