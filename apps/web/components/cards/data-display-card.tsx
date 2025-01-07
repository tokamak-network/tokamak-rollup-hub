'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

interface DataDisplyCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description: string;
  isDisabled: boolean;
  isBeta: boolean;
  selectedState: string;
}

export const DataDisplayCard: React.FC<DataDisplyCardProps> = ({
  title,
  description,
  isDisabled,
  isBeta,
  selectedState,
  ...props
}) => {
  const isSelected = selectedState === title.toLowerCase();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [selectedState]);

  return (
    <button
      key={key}
      disabled={isDisabled}
      className={clsx(
        'group mb-[25px] flex flex-col items-center rounded-2xl p-[20px] text-center ring-2 last:mb-0 light:bg-white dark:bg-gradient-card md:mb-0 md:w-1/3',
        {
          'hover:ring-tokamak-blue dark:hover:ring-tokamak-blue': !isDisabled,
          'cursor-not-allowed opacity-60': isDisabled,
          'ring-tokamak-blue': isSelected,
          'ring-[#E8EDF2] dark:ring-transparent': !isSelected,
        },
      )}
      {...props}
    >
      <div className="mb-[15px] flex">
        <h3 className="pt-[3px] text-3xl font-bold">{title}</h3>
        {isBeta && (
          <div className="font-georgia ml-[7px] text-[20px] font-normal italic text-tokamak-blue">
            Beta
          </div>
        )}
      </div>
      <div className="flex h-full flex-col items-center gap-[15px]">
        <p className="font-medium text-[#7E7E8F] dark:text-trh-gray">{description}</p>
        {isDisabled ? (
          <p className="text-[14px] font-semibold text-[#616D7E]">
            <br />
            Coming Soon
          </p>
        ) : (
          <div
            className={clsx(
              'flex h-[35px] w-[96px] items-center justify-center gap-[6px] rounded-full bg-white bg-opacity-25 px-[15px] py-[12px] text-sm ring-1 ring-[#DFE4EE] transition-colors group-hover:ring-[#C6CBD9] dark:bg-black dark:text-white dark:ring-[#1D2838] dark:group-hover:ring-[#ADB3BA]',
              {
                'ring-[#C6CBD9] dark:ring-[#ADB3BA]': isSelected,
              },
            )}
          >
            Choose
          </div>
        )}
      </div>
    </button>
  );
};
