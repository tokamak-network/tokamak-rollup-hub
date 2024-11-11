'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { useRef } from 'react';

const menuList = [
  {
    text: 'Tokamak Network',
    url: 'https://www.tokamak.network/#/',
  },
  {
    text: 'L2 Mainnet',
    url: 'https://titan.tokamak.network/',
  },
  {
    text: 'L2 On-Demand',
    url: 'https://rolluphub.tokamak.network/',
    isSelected: true,
  },
  {
    text: 'Bridge & Swap',
    url: 'https://bridge.tokamak.network/',
  },
  {
    text: 'Staking',
    url: 'https://simple.staking.tokamak.network/home',
  },
  {
    text: 'DAO',
    url: 'https://dao.tokamak.network/#/',
  },
];

interface MenuProps {
  text: string;
  url: string;
  isSelected?: boolean;
}

function MenuElement({ text, url, isSelected = false }: MenuProps) {
  return (
    <Link
      href={url}
      className={clsx(
        {
          'md:bg-white md:text-[#353C48]': isSelected,
          'opacity-25 md:opacity-100': !isSelected,
        },
        'z-50 flex h-[45px] cursor-pointer items-center justify-center text-nowrap px-5 py-[11px] text-center text-white',
      )}
    >
      {text}
    </Link>
  );
}

export default function TokamakGlobalNav() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -130, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 130, behavior: 'smooth' });
    }
  };

  return (
    <div className="z-50 flex h-[45px] w-full justify-center bg-[#2775FF] font-titillium text-[15px] font-bold">
      <div className="z-50 p-[15px] md:hidden" onClick={scrollLeft}>
        <ChevronLeftIcon className="h-[15px]" />
      </div>
      <div className="flex overflow-x-auto" ref={scrollContainerRef}>
        {menuList.map((menu, index) => (
          <MenuElement key={index} text={menu.text} url={menu.url} isSelected={menu.isSelected} />
        ))}
      </div>
      <div className="z-50 p-[15px] md:hidden" onClick={scrollRight}>
        <ChevronRightIcon className="h-[15px]" />
      </div>
    </div>
  );
}
