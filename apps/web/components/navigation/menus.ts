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
        href: 'https://onther-max.notion.site/Devnet-111f35cdc60080fb8c60ec357f10e429',
      },
      {
        name: 'Get Help',
        externalLink: true,
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSf2-6373Pn4KkOyoP4VjPXgO1vabDyK1qTjtNV_s1ccfzcywA/viewform',
      },
    ],
  },
];
