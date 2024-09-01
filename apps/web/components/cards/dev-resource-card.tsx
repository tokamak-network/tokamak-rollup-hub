'use client';
import Link from 'next/link';
import { GeneralBtn } from '../buttons/general-btn';
import { Dispatch, SetStateAction } from 'react';

export interface DevResourceProps {
  type: 'op' | 'zk+';
  btnText: string;
  isDisabled: boolean;
  description: string;
  docsUrl: string;
  setResource: Dispatch<SetStateAction<string>>;
  superScriptColor: 'red' | 'green';
}

export function DevResourceCard({
  type,
  btnText,
  isDisabled,
  description,
  docsUrl,
  setResource,
  superScriptColor,
}: DevResourceProps) {
  const supColorVariants: { [key: string]: string } = {
    red: 'text-trh-red',
    green: 'text-trh-green',
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-[18px] text-[32px] font-bold">
        Tokamak <sup className={`${supColorVariants[superScriptColor]}`}>{type.toUpperCase()}</sup>
      </h2>
      <div className="item-center mb-[30px] flex flex-col justify-between text-center text-lg font-medium md:h-[250px] xl:h-[130px]">
        <p className="text-trh-gray">{description}</p>
        <p className="text-tokamak-blue underline underline-offset-4">
          <Link href={docsUrl}>For additional information, check out Documentation.</Link>
        </p>
      </div>
      <GeneralBtn
        onClick={() => setResource(type as string)}
        isDisabled={isDisabled}
        text={btnText}
        styleType="primary"
        size="lg"
      />
    </div>
  );
}
