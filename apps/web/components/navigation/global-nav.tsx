import Image from 'next/image';
import Link from 'next/link';
import Symbol from '../../public/symbol-nav.svg';
import TokamakRollupHub from '../../public/tokamakRollupHub-nav.svg';
import { NavInfo, NavList } from './global-nav-list';

export default function GlobalNav() {
  const infos: NavInfo[] = [
    { href: '/deploy', name: 'Deploy', dropDown: false },
    { href: '/discover', name: 'Discover', dropDown: true },
    { href: '/more', name: 'More', dropDown: true },
  ];

  return (
    <div className="flex h-[78px] w-full items-center justify-between px-[20px] md:px-[30px]">
      <div className="flex h-auto w-[213px]">
        <Link href={'/'} className="flex items-center justify-center gap-[10px]">
          <Image src={Symbol} alt="tokamak rollup hub symbol" />
          <Image src={TokamakRollupHub} alt="Tokamak Rollup Hub" className="hidden xl:inline" />
        </Link>
      </div>
      <nav>
        <NavList infos={infos} />
      </nav>
      <div>
        <div className="h-17 w-[115px] bg-green-300">Connect Wallet</div>
      </div>
    </div>
  );
}
