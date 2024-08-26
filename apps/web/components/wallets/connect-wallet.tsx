'use client'
import Image from "next/image"
import ThanosSymbol from "../../public/symbol-thanos.svg"
import DangerIcon from "../../public/icon-danger.svg"
import { ConnectWalletBtn } from "../buttons/connect-wallet-btn"
import { useAccount, useChainId } from "wagmi"
import { useEffect, useState } from "react"
import { WalletArea } from "./wallet-area"
import { thanosSepolia } from "@/lib/chains"
import { ChangeNetworkToThanos } from "../warnings/network"
import clsx from "clsx"

export function ConnectWallet() {
  const { isConnected, address } = useAccount();
  const [ready, setReady] = useState(false);
  const [isThanos, setIsThanos] = useState(false);
  const chainId = useChainId()

  useEffect(() => {
    setReady(true);
  }, [])

  useEffect(() => {
    if (chainId === thanosSepolia.id) {
      setIsThanos(true)
    } else {
      setIsThanos(false)
    }
  }, [chainId])

  if (!ready) {
    return null
  }

  console.log(chainId)

  return (
    <div className="flex items-center gap-4 relative">
      {isConnected ?
        <div className={clsx({
          'ring-tokamak-blue': isThanos,
        }, "flex justify-center items-center rounded-full ring-2 ring-[#1D2838] p-[6px]")}>
          <Image src={isThanos ? ThanosSymbol : DangerIcon} alt='Thanos' />
        </div>
        : null}
      {isConnected && !isThanos ? <ChangeNetworkToThanos /> : null}
      {isConnected ? <WalletArea address={address} /> : <ConnectWalletBtn />}
    </div>
  )
}
