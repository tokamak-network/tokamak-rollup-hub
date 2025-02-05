import { TRH_USER_DOC_URL } from '@/consts/urls';

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
        href: TRH_USER_DOC_URL,
      },
      {
        name: 'Get Help',
        externalLink: true,
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSc6pHHABsnIZ2MvcEa57VCtSNTRXHAaFjBLQYf1LbiMB_81OA/viewform',
      },
    ],
  },
];
