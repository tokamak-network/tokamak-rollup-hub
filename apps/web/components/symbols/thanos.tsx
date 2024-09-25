import Image from 'next/image';
import ThanosSymbol from '../../public/symbol-thanos.svg';

interface ThanosCircleSymbolProps {
  networkType: 'mainnet' | 'testnet';
}

export function ThanosCircleSymbol({ networkType }: ThanosCircleSymbolProps) {
  const circleVariants: { [key: string]: string } = {
    mainnet: 'dark:bg-[#1D2838]',
    testnet: 'dark:bg-black ring-2 ring-tokamak-blue',
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full p-[6px] ${circleVariants[networkType]}`}
    >
      <Image src={ThanosSymbol} alt="Thanos" />
    </div>
  );
}
