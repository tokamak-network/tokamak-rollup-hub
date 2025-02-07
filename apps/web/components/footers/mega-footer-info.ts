import { TOKAMAK_DISCORD_URL } from '@/consts/urls';

interface MultiLink {
  items: Item[];
}

interface Item {
  name: string;
  super?: string;
  link: string;
  multiLink?: MultiLink;
}

interface Category {
  title: string;
  items: Item[];
}

export const megaFooterCategorys: Category[] = [
  {
    title: 'Developer',
    items: [
      {
        name: 'Documents',
        link: 'https://docs.tokamak.network/home',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/tokamak-network',
      },
      {
        name: 'Grant',
        link: 'https://tokamak.notion.site/Tokamak-Network-Grant-Program-GranTON-f2384b458ea341a0987c7e73a909aa21',
      },
    ],
  },
  {
    title: 'Features',
    items: [
      {
        name: 'Rollup Hub',
        link: 'https://rolluphub.tokamak.network/',
      },
      {
        name: 'Staking',
        link: 'https://simple.staking.tokamak.network/home',
      },
      {
        name: 'DAO',
        link: 'https://dao.tokamak.network/#/',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        name: 'Team',
        link: 'https://www.tokamak.network/about',
      },
      {
        name: 'Onboarding',
        link: 'https://tokamak.notion.site/Tokamak-Network-Onboarding-523bc627bd374326b5dfbec3d3b0a8e1',
      },
    ],
  },
  {
    title: 'Social',
    items: [
      {
        name: 'Medium',
        link: 'https://medium.com/tokamak-network',
      },
      {
        name: 'X (Twitter)',
        link: 'https://x.com/tokamak_network',
      },
      {
        name: 'Discord',
        link: TOKAMAK_DISCORD_URL,
      },
      {
        name: 'Telegram (EN)',
        link: 'https://t.me/tokamak_network',
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/tokamaknetwork/',
      },
    ],
  },
];
