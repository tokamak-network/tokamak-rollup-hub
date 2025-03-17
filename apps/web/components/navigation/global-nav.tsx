'use client';
import Image from 'next/image';
import Link from 'next/link';
import Symbol from '../../public/symbol-trh.svg';
import TokamakRollupHub from '../../public/tokamakRollupHub-nav.svg';
import { NavMenu } from './global-nav-menu';
import { BurgerBtn } from '../buttons/burger-btn';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import VersionDropDownComponent from './version-dropdown';

export default function GlobalNav() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 45) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        {
          'sticky top-0': isScroll,
          relative: !isScroll,
        },
        'z-40 flex h-[78px] min-h-[78px] w-full items-center justify-between overflow-x-clip overflow-y-visible bg-[#FAFBFC] bg-opacity-90 px-[20px] dark:bg-black dark:bg-opacity-90 md:px-[30px]',
      )}
    >
      <div className="absolute -top-[120px] left-[calc(50%-500px)] -z-30 hidden min-h-[174px] min-w-[1000px] overflow-hidden rounded-[100%] bg-nav-blue blur-3xl dark:block"></div>
      <div className="z-10 flex">
        <Link href={'/'} className="flex items-center justify-center gap-[10px]">
          <Image src={Symbol} alt="tokamak rollup hub symbol" />
          <Image
            src={TokamakRollupHub}
            alt="Tokamak Rollup Hub"
            className="hidden invert dark:invert-0 xl:inline"
          />
        </Link>
      </div>
      <nav className="absolute right-[228px]">
        <NavMenu />
      </nav>
      <div>
        <VersionDropDownComponent />
      </div>
      <div className="z-10 flex items-center gap-4">
        <BurgerBtn />
      </div>
    </div>
  );
}
