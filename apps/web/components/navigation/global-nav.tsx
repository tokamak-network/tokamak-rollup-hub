import Image from 'next/image';
import Link from 'next/link';
import Symbol from '../../public/symbol-nav.svg';
import TokamakRollupHub from '../../public/tokamakRollupHub-nav.svg';
import { NavInfo, NavList } from './global-nav-list';
import { BurgerBtn } from '../buttons/burger-btn';
import { WalletBoard } from '@/app/connect-wallet/wallet-board';

export default function GlobalNav() {
  const infos: NavInfo[] = [
    { href: '/deploy', name: 'Deploy', dropDown: false },
    { href: '/discover', name: 'Discover', dropDown: true },
    { href: '/more', name: 'More', dropDown: true },
  ];

  return (
    <div className="relative flex h-[78px] min-h-[78px] w-full items-center justify-between px-[20px] md:px-[30px]">
      <div className="flex">
        <Link href={'/'} className="flex items-center justify-center gap-[10px]">
          <Image src={Symbol} alt="tokamak rollup hub symbol" />
          <Image src={TokamakRollupHub} alt="Tokamak Rollup Hub" className="hidden xl:inline" />
        </Link>
      </div>
      <nav className="absolute left-[50%] ml-[-156px]">
        <NavList infos={infos} />
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
