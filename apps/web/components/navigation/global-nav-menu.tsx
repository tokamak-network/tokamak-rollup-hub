'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { menus } from './menus';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const NormalItem = ({
  href,
  currentPath,
  isSub = false,
  externalLink,
  children,
}: {
  href: string;
  currentPath: string;
  isSub: boolean;
  externalLink?: boolean;
  children: React.ReactNode;
}) => {
  const isSelected = currentPath.includes(href);
  return (
    <div
      className={clsx(
        {
          'hover:text-tokamak-blue': !isSelected,
          'text-tokamak-blue': isSelected,
          'flex flex-col justify-center font-semibold': !isSub,
          'text-[13px] font-medium': isSub,
        },
        'group transition-colors',
      )}
    >
      {externalLink ? (
        <Link href={href} rel="noopener noreferrer" target="_blank">
          {children}
        </Link>
      ) : (
        <Link href={href}>{children}</Link>
      )}
    </div>
  );
};

const DropDownContainer = ({
  name,
  currentPath,
  children,
}: {
  name: string;
  currentPath: string;
  children: React.ReactNode;
}) => {
  const isSelected = currentPath.includes(name.toLowerCase());
  return (
    <div className="dropdown dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className={clsx(
          {
            'hover:text-tokamak-blue': !isSelected,
            'text-tokamak-blue': isSelected,
          },
          'group flex h-8 items-center justify-center gap-[6px] text-center font-semibold transition',
        )}
      >
        {name}
        <ChevronDownIcon className="h-4 stroke-[#CCCCCC] transition-transform group-hover:rotate-180 group-focus:rotate-180 dark:stroke-[#616D7E]" />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content w-[121px] gap-[15px] rounded-lg bg-white p-[18px] ring-2 ring-[#E8EDF2] dark:bg-black dark:ring-[#1D2838]"
      >
        {children}
      </ul>
    </div>
  );
};

export function NavMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden w-[312px] gap-[45px] md:flex md:justify-between md:gap-[45px] xl:gap-[60px]">
      {menus.map((item, index) => {
        if (item.href && !item.subItems) {
          return (
            <NormalItem isSub={false} href={item.href} currentPath={pathname} key={index}>
              {item.name}
            </NormalItem>
          );
        } else if (!item.href && item.subItems) {
          return (
            <DropDownContainer name={item.name} currentPath={pathname} key={index}>
              {item.subItems.map((subItem, index) => {
                return (
                  <NormalItem
                    isSub={true}
                    href={subItem.href as string}
                    externalLink={subItem.externalLink}
                    currentPath={pathname}
                    key={index}
                  >
                    {subItem.name === 'Tokamak OP' ? (
                      <p>
                        Tokamak{' '}
                        <span
                          className={clsx(
                            {
                              'text-tokamak-blue': pathname.includes(subItem.href as string),
                              'text-trh-red': !pathname.includes(subItem.href as string),
                            },
                            'group-hover:text-tokamak-blue',
                          )}
                        >
                          OP
                        </span>
                      </p>
                    ) : null}
                    {subItem.name === 'Tokamak ZK+' ? (
                      <p>
                        Tokamak{' '}
                        <span
                          className={clsx(
                            {
                              'text-tokamak-blue': pathname.includes(subItem.href as string),
                              'text-trh-green': !pathname.includes(subItem.href as string),
                            },
                            'group-hover:text-tokamak-blue',
                          )}
                        >
                          ZK+
                        </span>
                      </p>
                    ) : null}
                    {!subItem.name.includes('Tokamak') ? subItem.name : null}
                  </NormalItem>
                );
              })}
            </DropDownContainer>
          );
        }
      })}
    </div>
  );
}
