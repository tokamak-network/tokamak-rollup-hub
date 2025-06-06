import Image from 'next/image';
import DangerIcon from '../../public/icon-danger.svg';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ThanosCircleSymbol } from '@/components/symbols/thanos';
import { NetworkSwitchBtn } from '@/components/buttons/network-switch-btn';
import { thanosSepolia } from '@/lib/chains';
import { useAccount, useSwitchChain } from 'wagmi';
import { ChangeNetworkToThanos } from '@/components/warnings/network';
import { useEffect, useState } from 'react';
import { mainnet } from 'viem/chains';
import { EthCircleSymbol } from '@/components/symbols/ethereum';

// TODO: if mainnet publish, add feature and symbol

type vaildNetworkType = 'thanos-sepolia' | 'ethereum' | undefined;

export function SwitchNetwork() {
  const { switchChain } = useSwitchChain();
  const [networks, setNetworks] = useState<vaildNetworkType>(undefined);
  const { chainId } = useAccount();

  useEffect(() => {
    if (chainId === thanosSepolia.id) {
      setNetworks('thanos-sepolia');
    } else if (chainId === mainnet.id) {
      setNetworks('ethereum');
    } else {
      setNetworks(undefined);
    }
  }, [chainId]);

  const handleSwitchNetwork = (chainId: number) => {
    switchChain({ chainId: chainId });
  };
  return (
    <>
      <button
        className="relative"
        onClick={() => (document.getElementById('switch_network_modal') as any).showModal()}
      >
        {networks === 'thanos-sepolia' && <ThanosCircleSymbol networkType="testnet" />}
        {networks === 'ethereum' && <EthCircleSymbol />}
        {!networks && (
          <div className="flex items-center justify-center rounded-full p-[6px] ring-2 ring-[#E8EDF2] dark:ring-[#1D2838]">
            <Image src={DangerIcon} alt="Thanos" />
          </div>
        )}
        {!networks && <ChangeNetworkToThanos />}
      </button>
      <dialog id="switch_network_modal" className="modal bg-black bg-opacity-55 dark:bg-opacity-75">
        <div className="modal-box w-[360px] bg-white ring-1 ring-[#E8EDF2] dark:bg-black dark:ring-[#232429]">
          <div className="mb-[21px] flex items-center justify-between">
            <h3 className="text-xl font-semibold">Switch Networks</h3>
            <form method="dialog">
              <button className="flex items-center justify-center">
                <XMarkIcon className="size-6 fill-[#9A9AAF] text-trh-gray-close-modal dark:fill-[#64646F]" />
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-[9px]">
            <NetworkSwitchBtn networkType="mainnet" isDisabled={true}>
              <p className="font-semibold">
                Thanos mainnet <span className="font-bold text-trh-gray">Coming Soon</span>
              </p>
            </NetworkSwitchBtn>
            <NetworkSwitchBtn
              onClick={() => handleSwitchNetwork(thanosSepolia.id)}
              networkType="testnet"
              isDisabled={false}
            >
              <p className="font-semibold">
                Thanos testnet <span className="text-tokamak-blue">Sepolia</span>
              </p>
            </NetworkSwitchBtn>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
