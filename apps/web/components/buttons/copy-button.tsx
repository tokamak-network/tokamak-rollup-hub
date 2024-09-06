'use client';
import CopyIcon from '../../public/icon-copy-default.svg';
import CheckIcon from '../../public/icon-check.svg';
import Image from 'next/image';
import React, { useState } from 'react';
import { copyToClipboard } from '@/lib/utils';

interface CopyBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const CopyBtn: React.FC<CopyBtnProps> = ({ text, ...props }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      {...props}
      onClick={() => {
        copyToClipboard(text, setCopied);
      }}
    >
      {copied ? (
        <Image src={CheckIcon} className="h-6 w-6" alt="copied" />
      ) : (
        <Image src={CopyIcon} className="h-6 w-6 opacity-45" alt="copy" />
      )}
    </button>
  );
};
