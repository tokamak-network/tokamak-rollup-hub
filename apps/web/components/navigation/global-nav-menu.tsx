'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ArrowDown from '../../public/icon-arrow-down.svg';
import Image from 'next/image';
import clsx from 'clsx';

type ItemInfo = {
  name: string;
  href?: string;
  subItems?: ItemInfo[];
};

const NormalItem = ({
  href,
  currentPath,
  isSub = false,
  children,
}: {
  href: string;
  currentPath: string;
  isSub: boolean;
  children: React.ReactNode;
}) => {
  const isSelected = currentPath.includes(href);
  return (
    <div
      className={clsx(
        {
          'hover:text-tokamak-blue': !isSelected,
          'text-tokamak-blue': isSelected,
          'font-semibold': !isSub,
          'text-[13px] font-medium': isSub,
        },
        'transition-colors group',
      )}
    >
      <Link href={href}>{children}</Link>
    </div>
  );
};

const DropDownContainer = ({ name, currentPath, children }: { name: string; currentPath: string; children: React.ReactNode }) => {
  const isSelected = currentPath.includes(name.toLowerCase())
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
          "flex items-center justify-center gap-[6px] text-center font-semibold group *:transition"
        )}
      >
        {name}
        <Image src={ArrowDown} alt="arrow-down" className='group-hover:rotate-180 group-focus:rotate-180' />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content rounded-lg bg-black ring-2 ring-[#1D2838] p-[18px] w-[121px] gap-[15px] mt-1"
      >
        {children}
      </ul>
    </div>
  );
};

export function NavMenu() {
  const pathname = usePathname();

  const itemInfos: ItemInfo[] = [
    {
      name: 'Deploy',
      href: '/deploy',
    },
    {
      name: 'Discover',
      subItems: [
        {
          name: 'Tokamak OP',
          href: '/discover/tokamak-op',
        },
        {
          name: 'Tokamak ZK+',
          href: '/discover/tokamak-zk',
        },
      ],
    },
    {
      name: 'More',
      subItems: [
        {
          name: 'User Guide',
          href: '/more/user-guide',
        },
        {
          name: 'Get Help',
          href: '/more/help',
        },
      ],
    },
  ];

  return (
    <div className="hidden w-[312px] gap-[45px] md:flex md:justify-between md:gap-[45px] xl:gap-[60px]">
      {itemInfos.map((item, index) => {
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
                  <NormalItem isSub={true} href={subItem.href as string} currentPath={pathname} key={index}>
                    {subItem.name === 'Tokamak OP' ? <p>Tokamak <span className='text-trh-red group-hover:text-tokamak-blue'>OP</span></p> : null}
                    {subItem.name === 'Tokamak ZK+' ? <p>Tokamak <span className='text-trh-green group-hover:text-tokamak-blue'>ZK+</span></p> : null}
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
