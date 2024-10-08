import Image from 'next/image';
import EthSymbolWhite from '../../public/symbol-ethereum-white.svg';
import EthSymbolDark from '../../public/symbol-ethereum-dark.svg';
import { useTheme } from 'next-themes';

export function EthCircleSymbol() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className="">
      {currentTheme === 'dark' && <Image src={EthSymbolDark} alt="eth" className="size-[35px]" />}
      {currentTheme === 'light' && <Image src={EthSymbolWhite} alt="eth" className="size-[35px]" />}
    </div>
  );
}
