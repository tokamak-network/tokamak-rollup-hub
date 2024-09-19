'use client';
import Image from 'next/image';
import ArrowTop from '../../public/icon-arrow-top.svg';
import { MegaFooter } from './mega-footer';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentPath = usePathname();
  return (
    <div className="flex w-full justify-center pl-[20px] pr-[30px]">
      <div className="w-full md:max-w-[1620px]">
        {currentPath == '/' ? <MegaFooter /> : null}
        <footer className="flex h-[78px] w-full items-center justify-between text-balance">
          <p className="flex font-['Open_Sans'] text-[11px] font-normal text-trh-gray">
            <span>Copyright &copy;2024</span>
            <span className="text-trh-gray-light">&nbsp;Tokamak Network&nbsp;</span>
            <span className="hidden md:inline">All Rights Reserved.</span>
          </p>
          <div
            className="hover:cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            <Image src={ArrowTop} alt="top" />
          </div>
        </footer>
      </div>
    </div>
  );
}
