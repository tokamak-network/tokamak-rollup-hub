'use client';
import Image from 'next/image';
import BurgerIcon from '../../public/icon-burger.svg';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { menus } from '../navigation/menus';
import { usePathname, useRouter } from 'next/navigation';
import { useRef } from 'react';
import clsx from 'clsx';

export function BurgerBtn() {
  const router = useRouter();
  const dialogMenu = useRef<HTMLDialogElement>(null);
  const currentPath = usePathname();

  const handleClose = () =>
    new Promise((resolve) => {
      dialogMenu.current?.close();
      resolve(true);
    });

  const handleCloseAndRoute = (href: string) =>
    handleClose().then((message) => {
      if (message && dialogMenu.current != null) {
        router.push(href);
      }
    });

  return (
    <>
      <button
        className="rounded-md ring-1 ring-[#E8EDF2] dark:ring-[#535353] md:hidden"
        onClick={() => (document.getElementById('mobile-menu') as any).showModal()}
      >
        <Image
          src={BurgerIcon}
          alt="burger"
          className="size-[35px] light:opacity-55 light:invert"
        />
      </button>
      <dialog id="mobile-menu" className="modal bg-white p-[20px] dark:bg-black" ref={dialogMenu}>
        <div className="modal-top flex h-full w-full flex-col rounded-[0px]">
          <form method="dialog" className="flex w-full justify-end">
            <button className="flex items-center justify-center">
              <XMarkIcon className="size-[31px] text-[#9A9AAF] dark:text-white" />
            </button>
          </form>
          <div className="flex h-full w-full flex-col items-center justify-center gap-10">
            {menus.map((menu, index) => (
              <div
                key={index}
                className={clsx(
                  {
                    'text-tokamak-blue':
                      (menu.href && currentPath.includes(menu.href)) ||
                      menu.subItems?.find((item) => item.href && currentPath.includes(item.href)),
                  },
                  'flex flex-col gap-3',
                )}
              >
                {menu.subItems ? (
                  <>
                    <h1 className="text-center text-3xl font-semibold">{menu.name}</h1>
                    <ol className="flex w-full flex-col items-center justify-center gap-3">
                      {menu.subItems.map((sub, index) => (
                        <li key={index}>
                          <button
                            onClick={() => handleCloseAndRoute(sub.href as string)}
                            className={clsx(
                              {
                                '*:text-tokamak-blue': sub.href && currentPath.includes(sub.href),
                              },
                              'text-lg font-medium text-[#2E2E3A] dark:text-[#D9D9D9]',
                            )}
                          >
                            {sub.name === 'Tokamak OP' ? (
                              <p>
                                Tokamak{' '}
                                <span
                                  className={clsx({
                                    'text-tokamak-blue': sub.href && currentPath.includes(sub.href),
                                    'text-trh-red': sub.href && !currentPath.includes(sub.href),
                                  })}
                                >
                                  OP
                                </span>
                              </p>
                            ) : null}
                            {sub.name === 'Tokamak ZK+' ? (
                              <p>
                                Tokamak{' '}
                                <span
                                  className={clsx({
                                    'text-tokamak-blue': sub.href && currentPath.includes(sub.href),
                                    'text-trh-green': sub.href && !currentPath.includes(sub.href),
                                  })}
                                >
                                  ZK+
                                </span>
                              </p>
                            ) : null}
                            {!sub.name.includes('Tokamak') ? <span>{sub.name}</span> : null}
                          </button>
                        </li>
                      ))}
                    </ol>
                  </>
                ) : (
                  <button onClick={() => handleCloseAndRoute(menu.href as string)}>
                    <h1 className="text-center text-3xl font-semibold">{menu.name}</h1>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
