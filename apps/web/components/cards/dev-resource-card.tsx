import Link from 'next/link';
import { GeneralBtn } from '../buttons/general-btn';
import React from 'react';

export interface DevResourceProps {
  type: 'op' | 'zk+';
  btnText: string;
  isDisabled: boolean;
  description: string;
  handler: React.MouseEventHandler<HTMLButtonElement>;
  superScriptColor: 'red' | 'green';
}

export function DevResourceCard({
  type,
  btnText,
  isDisabled,
  description,
  handler,
  superScriptColor,
}: DevResourceProps) {
  const supColorVariants: { [key: string]: string } = {
    red: 'text-trh-red',
    green: 'text-trh-green',
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <h2 className="mb-[18px] text-[32px] font-bold">
        Tokamak <sup className={`${supColorVariants[superScriptColor]}`}>{type.toUpperCase()}</sup>
      </h2>
      <div className="item-center mb-[30px] flex flex-col justify-between text-center text-[17.5px] font-medium md:h-[156px] xl:h-[78px]">
        <p className="text-[#7E7E8F] dark:text-trh-gray">{description}</p>
      </div>
      <GeneralBtn
        onClick={handler}
        isDisabled={isDisabled}
        text={btnText}
        styleType="primary"
        size="lg"
      />
    </div>
  );
}
