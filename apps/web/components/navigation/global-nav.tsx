import Image from 'next/image';
import Link from 'next/link';
import Symbol from '../../public/symbol-nav.svg';
import TokamakRollupHub from '../../public/tokamakRollupHub-nav.svg';
import { NavMenu } from './global-nav-menu';
import { BurgerBtn } from '../buttons/burger-btn';
import { WalletBoard } from '@/app/connect-wallet/wallet-board';

export default function GlobalNav() {
  return (
    <div className="relative flex h-[78px] min-h-[78px] w-full items-center justify-between px-[20px] md:px-[30px] overflow-x-clip overflow-y-visible">
      <div className="absolute left-[calc(50%-500px)] rounded-[100%] -top-[87px] min-h-[174px] min-w-[1000px] bg-nav-blue blur-3xl"></div>
      <div className="flex">
        <Link href={'/'} className="flex items-center justify-center gap-[10px]">
          <Image src={Symbol} alt="tokamak rollup hub symbol" />
          <Image src={TokamakRollupHub} alt="Tokamak Rollup Hub" className="hidden xl:inline" />
        </Link>
      </div>
      <nav className="absolute left-[50%] ml-[-156px]">
        <NavMenu />
      </nav>
      <div className="flex gap-4">
        <WalletBoard />
        <div className="md:hidden">
          <BurgerBtn />
        </div>
      </div>
    </div>
  );
}
