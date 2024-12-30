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
        href: 'https://docs.tokamak.network/home/~/changes/agYOWEeK7NUEeofss2bX/service-guide/rollup-hub',
      },
      {
        name: 'Get Help',
        externalLink: true,
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSc6pHHABsnIZ2MvcEa57VCtSNTRXHAaFjBLQYf1LbiMB_81OA/viewform',
      },
    ],
  },
];
