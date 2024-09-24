'use client';
import Image from 'next/image';
import LightMode from '../../public/icon-light-mode.svg';
import DarkMode from '../../public/icon-dark-mode.svg';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function ThemeSwitchBtn() {
  const [mount, setMount] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  console.log(currentTheme);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  return (
    <div className="flex w-[150px] items-center justify-between gap-2 px-2 py-[7.5px] text-[13px]">
      {currentTheme === 'dark' ? (
        <Image src={LightMode} alt="light-mode" />
      ) : (
        <Image src={DarkMode} alt="dark-mode" />
      )}
      {currentTheme === 'dark' ? (
        <span className="block">Light mode</span>
      ) : (
        <span className="block">Dark mode</span>
      )}
      <div className="h-4 w-8">
        <label className="relative cursor-pointer">
          <input
            type="checkbox"
            className="peer hidden"
            checked={currentTheme === 'dark' ? false : true}
            onChange={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
          />
          <div className="absolute top-1 h-2 w-8 rounded-full dark:bg-[#BEC1C6]" />
          <div className="absolute h-4 w-4 rounded-full bg-blue-500 transition-transform peer-checked:translate-x-4 dark:bg-white" />
        </label>
      </div>
    </div>
  );
}
