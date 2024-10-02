interface ItemInfo {
  name: string;
  href?: string;
  externalLink?: boolean;
  subItems?: ItemInfo[];
}

// TODO: documents link
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
        externalLink: true,
        href: 'https://docs.tokamak.network/home/~/changes/9197pJPwvweJ6nTq8KSm/service-guide/rollup-hub',
      },
      {
        name: 'Get Help',
        externalLink: true,
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSf2-6373Pn4KkOyoP4VjPXgO1vabDyK1qTjtNV_s1ccfzcywA/viewform',
      },
    ],
  },
];
