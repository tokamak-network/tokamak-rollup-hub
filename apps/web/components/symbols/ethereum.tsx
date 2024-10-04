import Image from 'next/image';
import EthSymbolWhite from '../../public/symbol-ethereum-white.svg';
import EthSymbolDark from '../../public/symbol-ethereum-dark.svg';
import { useTheme } from 'next-themes';

export function EthCircleSymbol() {
  const { theme } = useTheme();
  return (
    <div className="">
      {theme === 'dark' && <Image src={EthSymbolDark} alt="eth" className="size-[35px]" />}
      {theme === 'light' && <Image src={EthSymbolWhite} alt="eth" className="size-[35px]" />}
    </div>
  );
}
