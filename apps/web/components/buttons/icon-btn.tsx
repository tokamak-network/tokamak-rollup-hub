'use client';
import React from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

interface IconBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isDisabled: boolean;
  isLoading: boolean;
  styleType: 'primary' | 'secondary';
  size?: 'default' | 'md' | 'lg' | '2xl' | 'landingPage';
  icon?: string | StaticImageData;
}

export const IconBtn: React.FC<IconBtnProps> = ({
  text,
  isDisabled,
  isLoading,
  styleType,
  size = 'default',
  icon,
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

  return (
    <button
      disabled={isDisabled || isLoading}
      className={clsx(
        `${sizeVariants[size]} ${styleVariants[styleType]} disabled:cursor-not-allowed`,
      )}
      {...props}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-sm" />
      ) : (
        <>
          {text}
          {icon && (
            <Image
              src={icon}
              alt="button-icon"
              width={14}
              height={14}
              className="ml-1 inline-block"
            />
          )}
        </>
      )}
    </button>
  );
};
