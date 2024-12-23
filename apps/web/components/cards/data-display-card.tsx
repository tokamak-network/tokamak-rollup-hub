import React from 'react';
import clsx from 'clsx';

interface DataDisplyCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description: string;
  isDisabled: boolean;
  selectedState: string;
}

export const DataDisplayCard: React.FC<DataDisplyCardProps> = ({
  title,
  description,
  isDisabled,
  selectedState,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      className={clsx(
        {
          'hover:ring-tokamak-blue': !isDisabled,
          'cursor-not-allowed opacity-60': isDisabled,
          'ring-tokamak-blue': selectedState === title.toLowerCase(),
          'ring-[#E8EDF2] dark:ring-transparent': selectedState !== title.toLowerCase(),
        },
        'mb-[25px] flex flex-col items-center rounded-2xl p-[20px] text-center ring-2 last:mb-0 light:bg-white light:ring-1 dark:bg-gradient-card md:mb-0 md:w-1/3',
      )}
      {...props}
    >
      <div className="mb-[15px]">
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      <div className="flex h-full flex-col justify-between">
        <p className="font-medium text-[#7E7E8F] dark:text-trh-gray">{description}</p>
        {isDisabled ? (
          <p className="font-medium text-[#616D7E]">
            <br />
            Coming Soon
          </p>
        ) : null}
      </div>
    </button>
  );
};
