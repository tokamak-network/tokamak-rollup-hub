'use client';
import Image from 'next/image';
import ArrowTop from '../../public/icon-arrow-top.svg';

export default function Footer() {
  return (
    <div className="flex w-full justify-center px-[30px]">
      <div className="w-full md:max-w-[1620px]">
        <footer className="flex h-[78px] w-full items-center justify-between text-balance">
          <p className="flex font-['Open_Sans'] text-[11px] font-normal text-[#999] dark:text-trh-gray">
            <span>Copyright &copy;2024</span>
            <span className="text-[#1C1C1C] dark:text-trh-gray-light">
              &nbsp;Tokamak Network&nbsp;
            </span>
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
            <Image src={ArrowTop} alt="top" className="invert-[50%]" />
          </div>
        </footer>
      </div>
    </div>
  );
}
