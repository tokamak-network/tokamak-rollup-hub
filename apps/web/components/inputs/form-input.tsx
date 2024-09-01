'use client';
import Image from 'next/image';
import CircleCancel from '../../public/icon-circle-cancel.svg';
import CircleError from '../../public/icon-circle-error.svg';
import { useRef } from 'react';
import clsx from 'clsx';

interface FormInputProps {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
}

export function FormInput({ type, label, name, placeholder, required, errors }: FormInputProps) {
  const inputRef = useRef(null);
  const handleInputClear = () => {
    // @ts-ignore
    inputRef.current.value = '';
  };

  return (
    <label className="flex flex-col gap-2">
      <span className="text-[#7D899A]">{label}</span>
      <div
        className={clsx(
          {
            'ring-[#FD3D51] focus-within:ring-[#FD3D51] hover:ring-2': errors,
          },
          'flex items-center gap-2 rounded-md border-none bg-[#080A0E] px-[15px] py-[10px] outline-none ring-1 ring-[#303F5A] focus-within:ring-tokamak-blue',
        )}
      >
        <input
          name={name}
          ref={inputRef}
          placeholder={placeholder}
          type={type}
          required={required}
          className="w-full bg-transparent caret-tokamak-blue outline-none placeholder:text-[#626D7D] [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button onClick={handleInputClear}>
          <Image className="opacity-50" src={errors ? CircleError : CircleCancel} alt="cancel" />
        </button>
      </div>
      {errors
        ? errors.map((error, index) => (
            <span className="text-[13px] text-[#FD3D51]" key={index}>
              {error}
            </span>
          ))
        : null}
    </label>
  );
}
