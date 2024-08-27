import React from "react";
import { ThanosCircleSymbol } from "../symbols/thanos";
import clsx from "clsx";

interface NetworkSwitchBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  networkType: 'mainnet' | 'testnet';
  isDisabled: boolean;
}

export const NetworkSwitchBtn: React.FC<NetworkSwitchBtnProps> = ({ children, networkType, isDisabled, ...props }) => {
  return (
    <button
      disabled={isDisabled}
      className={clsx({
        'opacity-50': isDisabled,
        'hover:ring-tokamak-blue': !isDisabled,
      }, "flex gap-4 items-center focus:bg-[#1F2128] w-full ring-1 ring-[#313442] rounded-lg py-[6px] px-3")} {...props}>
      <ThanosCircleSymbol networkType={networkType} />
      {children}
    </button>
  )
}
