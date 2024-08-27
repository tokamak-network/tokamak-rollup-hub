'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ArrowDown from '../../public/icon-arrow-down.svg';
import Image from 'next/image';
import clsx from 'clsx';

export type NavInfo = {
  href: string;
  name: string;
  dropDown: boolean;
};

export function NavList({ infos }: { infos: NavInfo[] }) {
  const pathname = usePathname();

  return (
    <ul className="hidden w-[312px] gap-[45px] md:flex md:justify-between md:gap-[45px] xl:gap-[60px]">
      {infos.map((nav, index) => {
        const isActive = pathname.includes(nav.href);
        return (
          <Link
            href={nav.href}
            key={index}
            className={clsx({
              'hover:text-tokamak-blue': !isActive,
              'text-tokamak-blue': isActive,
            })}
          >
            <li className="flex items-center justify-center gap-[6px] text-center font-semibold transition-colors">
              {nav.name}
              {nav.dropDown ? <Image src={ArrowDown} alt={nav.name} /> : null}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
