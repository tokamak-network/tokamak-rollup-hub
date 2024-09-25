import Image from 'next/image';
import DangerIcon from '../../public/icon-danger.svg';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ThanosCircleSymbol } from '@/components/symbols/thanos';
import { NetworkSwitchBtn } from '@/components/buttons/network-switch-btn';
import { thanosSepolia } from '@/lib/chains';
import { useSwitchChain } from 'wagmi';

// TODO: if mainnet publish, add feature and symbol

interface SwitchNetworkProps {
  isThanos: boolean;
}

export function SwitchNetwork({ isThanos }: SwitchNetworkProps) {
  const { switchChain } = useSwitchChain();

  const handleSwitchNetwork = (chainId: number) => {
    switchChain({ chainId: chainId });
  };
  return (
    <>
      <button onClick={() => (document.getElementById('switch_network_modal') as any).showModal()}>
        {isThanos ? (
          <ThanosCircleSymbol networkType="testnet" />
        ) : (
          <div className="flex items-center justify-center rounded-full p-[6px] ring-2 ring-[#E8EDF2] dark:ring-[#1D2838]">
            <Image src={DangerIcon} alt="Thanos" />
          </div>
        )}
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
