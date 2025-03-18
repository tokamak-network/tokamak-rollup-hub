'use client';
import { TRH_V2_URL } from '@/consts/urls';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import DropdownIcon from '@/public/icon-drop-down.svg';
export default function VersionDropDownComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={dropdownRef}
      className="absolute right-[76px] top-5 cursor-pointer flex-col items-start gap-2.5 rounded-[8px] border border-[#E8EDF2] bg-white py-[9px] md:right-[30px] md:flex"
    >
      <div
        className="flex cursor-pointer items-center gap-[12px] bg-white px-[12px]"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className="text-[15px] font-semibold leading-normal text-[#2E2E3A]">Rollup Hub V1</p>
        <Image
          src={DropdownIcon}
          alt="dropdown"
          width={12}
          height={12}
          style={{
            transform: isOpen ? 'rotate(180deg)' : '',
            transition: 'transform 0.1s ease-in-out',
          }}
        />
      </div>
      {isOpen && (
        <Link
          href={TRH_V2_URL}
          className="flex h-[36px] w-full items-center justify-start rounded-[6px] px-[12px] text-[15px] font-semibold leading-normal text-[#2E2E3A] hover:bg-[#2E2E3A] hover:text-white"
        >
          Rollup Hub V2
        </Link>
      )}
    </div>
  );
}
