'use client';

import React, { useState, ReactNode } from 'react';
import clsx from 'clsx';

interface TooltipProps {
  content: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ content, position = 'bottom' }: TooltipProps): JSX.Element {
  const [showTooltip, setShowTooltip] = useState(false);

  const tooltipPositionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-3',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-3',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-3',
  };

  const arrowPositionClasses = {
    top: 'bottom-[-6px] left-1/2 transform -translate-x-1/2 border-t-[#4B5563] border-t-[6px] border-x-transparent border-x-[6px]',
    bottom:
      'top-[-6px] left-1/2 transform -translate-x-1/2 border-b-[#4B5563] border-b-[6px] border-x-transparent border-x-[6px]',
    left: 'right-[-6px] top-1/2 transform -translate-y-1/2 border-l-[#4B5563] border-l-[6px] border-y-transparent border-y-[6px]',
    right:
      'left-[-6px] top-1/2 transform -translate-y-1/2 border-r-[#4B5563] border-r-[6px] border-y-transparent border-y-[6px]',
  };

  return (
    <div className="relative flex items-center">
      {/* Trigger Icon */}
      <span
        className="flex cursor-pointer items-center text-[#7E7E8F] dark:text-[#D8DFE9]"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 16 15"
          fill="none"
        >
          <path
            d="M7.99972 14.3574C11.7868 14.3574 14.8569 11.2873 14.8569 7.50021C14.8569 3.71311 11.7868 0.643066 7.99972 0.643066C4.21263 0.643066 1.14258 3.71311 1.14258 7.50021C1.14258 11.2873 4.21263 14.3574 7.99972 14.3574Z"
            stroke="#7D899A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.00056 9.16204V8.07289C8.45263 8.07289 8.89455 7.93884 9.27044 7.68768C9.64632 7.43653 9.93929 7.07954 10.1123 6.66188C10.2853 6.24422 10.3305 5.78464 10.2424 5.34126C10.1542 4.89787 9.93647 4.4906 9.6168 4.17093C9.29714 3.85127 8.88987 3.63358 8.44648 3.54538C8.0031 3.45719 7.54351 3.50246 7.12585 3.67546C6.70819 3.84846 6.35122 4.14142 6.10006 4.51731C5.84891 4.89319 5.71484 5.33511 5.71484 5.78718"
            stroke="#7D899A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.00028 12.0045C8.45726 12.0045 8.82771 11.634 8.82771 11.177C8.82771 10.7201 8.45726 10.3496 8.00028 10.3496C7.5433 10.3496 7.17285 10.7201 7.17285 11.177C7.17285 11.634 7.5433 12.0045 8.00028 12.0045Z"
            fill="#7D899A"
          />
        </svg>
      </span>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className={clsx(
            'absolute z-10 rounded-md bg-[#192232] px-3 py-2 text-sm text-[#D8DFE9] shadow-lg',
            'border border-[#4B5563] dark:border-[#4B5563] dark:bg-[#080A0E]',
            tooltipPositionClasses[position],
          )}
        >
          {content}
          {/* Arrow */}
          <span className={clsx('absolute h-0 w-0', arrowPositionClasses[position])}></span>
        </div>
      )}
    </div>
  );
}
