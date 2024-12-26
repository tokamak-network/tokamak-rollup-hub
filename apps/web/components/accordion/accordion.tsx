import React, { useState } from 'react';
interface AccordionProps {
  title: string;
  content: string;
  links: Record<string, string | undefined>;
}

export function Accordion({ title, content, links }: AccordionProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const parseContent = (text: string): React.ReactNode => {
    const regex = /{{(.*?)}}/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (index % 2 === 1 && links[part]) {
        return (
          <a
            key={index}
            href={links[part]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0070ED] underline underline-offset-4"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

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
          {parseContent(content)}
        </div>
      </div>
    </div>
  );
}
