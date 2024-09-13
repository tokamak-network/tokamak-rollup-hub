interface ItemInfo {
  name: string;
  href?: string;
  subItems?: ItemInfo[];
}

export const menus: ItemInfo[] = [
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
