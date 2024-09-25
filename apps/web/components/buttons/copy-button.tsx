'use client';
import CopyIcon from '../../public/icon-copy-default.svg';
import CheckIcon from '../../public/icon-check.svg';
import Image from 'next/image';
import React, { useState } from 'react';
import { copyToClipboard } from '@/lib/utils';

interface CopyBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function CopyBtn({ text }: CopyBtnProps) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        copyToClipboard(text, setCopied);
      }}
    >
      {copied ? (
        <Image src={CheckIcon} className="h-6 w-6" alt="copied" />
      ) : (
        <Image
          src={CopyIcon}
          className="h-6 w-6 opacity-20 light:invert dark:opacity-45"
          alt="copy"
        />
      )}
    </button>
  );
}
