import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

interface ImageBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  image: string | StaticImport;
}

export const ImageBtn: React.FC<ImageBtnProps> = ({ image, ...props }) => {
  return (
    <button {...props}>
      <Image alt="image-btn" src={image} className="h-6 w-6 opacity-45" />
    </button>
  );
};
