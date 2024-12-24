'use client';

import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

export function Accordion({ title, content }: AccordionProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`min-h-[59px] w-full rounded-2xl p-[20px] light:bg-white light:ring-1 light:ring-[#E8EDF2] dark:bg-gradient-card`}
    >
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[16px] font-semibold">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        >
          <path
            d="M7 1.5V13.5"
            className={`transition-colors ${
              isOpen ? 'light:stroke-black dark:stroke-white' : 'stroke-[#0070ED]'
            }`}
            strokeWidth="1.32353"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 7.5H1"
            className={`transition-colors ${
              isOpen ? 'light:stroke-black dark:stroke-white' : 'stroke-[#0070ED]'
            }`}
            strokeWidth="1.32353"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mt-4 text-[14px] font-[500px] text-[#7E7E8F] dark:text-[#7E7E8F]">
          {content}
        </div>
      </div>
    </div>
  );
}
