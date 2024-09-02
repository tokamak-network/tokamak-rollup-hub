'use client';
import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

interface GeneralButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isDisabled: boolean;
  styleType: 'primary' | 'secondary';
  size?: 'default' | 'md' | 'lg' | '2xl' | 'landingPage';
  arrow?: 'left' | 'right';
}

export const GeneralBtn: React.FC<GeneralButtonProps> = ({
  text,
  isDisabled,
  styleType,
  size = 'default',
  arrow,
  ...props
}) => {
  const sizeVariants: { [key: string]: string } = {
    default: '',
    md: 'w-[160px]',
    lg: 'w-[180px]',
    '2xl': 'w-[300px]',
    landingPage: 'w-[150px] md:w-[180px]',
  };

  const styleVariants: { [key: string]: string } = {
    primary: 'primary-btn',
    secondary: 'secondary-btn',
  };

  const { pending } = useFormStatus();

  return (
    <button
      disabled={isDisabled ? isDisabled : pending}
      className={clsx(
        {
          'bg-[#0F141C] text-[#626D7D] hover:bg-[#0F141C]': isDisabled,
        },
        `${sizeVariants[size]} ${styleVariants[styleType]} disabled:hover:cursor-not-allowed`,
      )}
      {...props}
    >
      {arrow == 'left' ? <ArrowLeftIcon className="size-[14px] stroke-white stroke-1" /> : null}
      {pending ? <span className="loading loading-spinner loading-sm" /> : text}
      {arrow == 'right' ? <ArrowRightIcon className="size-[14px] stroke-white stroke-1" /> : null}
    </button>
  );
};
