'use client'
import CopyIcon from "../../public/icon-square-2-stack.svg"
import CopiedIcon from "../../public/icon-copy-square-2-stack.svg"
import DisconnectIcon from "../../public/icon-arrow-left-start-on-rectangle.svg"
import Image from "next/image"
import { useState } from "react"
import { copyToClipboard } from "@/lib/utils"
import clsx from "clsx"
import { useDisconnect } from "wagmi"

type addressType = `0x${string}` | undefined

interface WalletAreaProps {
  address: addressType
}

function trimAddress(address: addressType): string {
  if (address === undefined) {
    return 'undefined'
  }
  const start = address.slice(0, 6);
  const end = address.slice(-4);
  return `${start}...${end}`
}

export function WalletArea({ address }: WalletAreaProps) {
  const [copied, setCopied] = useState(false)
  const { connectors, disconnect } = useDisconnect()

  return (
    <details className="dropdown">
      <summary className="wallet-btn list-none hover:cursor-pointer">{trimAddress(address)}</summary>
      <ul className="dropdown-content mt-3 ring-2 px-2 py-2 ring-[#1D2838] rounded-lg z-50 bg-black *:transition-colors">
        <li>
          <button onClick={() => {
            const text = address as string
            copyToClipboard(text, setCopied)
          }} disabled={copied} className="flex gap-2 hover:bg-base-200 rounded-lg py-2 px-2 *:transition-all w-full">
            {copied ? <Image src={CopiedIcon} alt='copied' /> : <Image src={CopyIcon} alt='copy' />}
            <span className={clsx({
              'text-tokamak-blue': copied,
            }, 'text-[13px] tracking-[0.26px]')}>Copy Address</span>
          </button>
        </li>
        <li>
          {
            connectors.map((connector) => {
              return (
                connector.type == 'metaMask' ?
                  <button onClick={() => {
                    disconnect({ connector })
                  }
                  } key={connector.id} className="flex gap-2 hover:bg-base-200 rounded-lg py-2 px-2 w-full">
                    <Image src={DisconnectIcon} alt='disconnect' />
                    <span className="text-[13px] tracking-[0.26px] whitespace-nowrap">Disconnect</span>
                  </button> : null
              )
            })
          }
        </li>
      </ul>
    </details>
  )
}
