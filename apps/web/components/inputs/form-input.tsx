'use client';
import Image from 'next/image';
import CircleCancel from '../../public/icon-circle-cancel.svg';
import CircleError from '../../public/icon-circle-error.svg';
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface FormInputProps {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
  address?: `0x${string}` | undefined;
}

export function FormInput({
  type,
  label,
  name,
  placeholder,
  required,
  errors,
  address,
}: FormInputProps) {
  const [inputState, setInputState] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputClear = () => {
    if (inputRef.current !== null) {
      inputRef.current.value = '';
    }
    setInputState(false);
    setErrorState(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorState(false);
    return e.target.value !== '' ? setInputState(true) : setInputState(false);
  };

  useEffect(() => {
    if (address !== undefined) {
      setInputState(true);
    }
    if (errors !== undefined) {
      setErrorState(true);
    }
  }, [errors, address]);

  return (
    <label className="flex flex-col gap-2">
      <span className="text-[#7E7E8F] dark:text-[#7D899A]">{label}</span>
      <div
        className={clsx(
          'flex items-center gap-2 rounded-md px-[15px] py-[10px] outline-none ring-1 dark:bg-[#080A0E]',
          {
            'border-[#FD3D51] ring-[#FD3D51] focus-within:ring-[#FD3D51] hover:shadow-[0_0_0_2px_#FD3D51]':
              errorState,
            'border border-[#192232] focus-within:ring-tokamak-blue dark:border-[#192232]':
              !errorState,
          },
        )}
      >
        <input
          name={name}
          ref={inputRef}
          placeholder={placeholder}
          defaultValue={address}
          type={type}
          onChange={handleInputChange}
          required={required}
          className="w-full bg-transparent caret-tokamak-blue outline-none placeholder:text-[#626D7D] [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          className={clsx({
            block: inputState,
            hidden: !inputState,
          })}
          onClick={handleInputClear}
        >
          {errorState ? (
            <Image src={CircleError} alt="error" />
          ) : (
            <Image
              className="opacity-25 light:invert dark:opacity-50"
              src={CircleCancel}
              alt="error"
            />
          )}
        </button>
      </div>
      {errorState && errors
        ? errors.map((error, index) => (
            <span className="text-[13px] text-[#FD3D51]" key={index}>
              {error}
            </span>
          ))
        : null}
    </label>
  );
}
