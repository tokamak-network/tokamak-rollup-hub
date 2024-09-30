interface Item {
  name: string;
  super?: string;
  link: string;
}

interface Category {
  title: string;
  items: Item[];
}

export const megaFooterCategorys: Category[] = [
  {
    title: 'About',
    items: [
      {
        name: 'Team',
        link: 'https://www.tokamak.network/about',
      },
      {
        name: 'Careers',
        link: 'https://tokamak.notion.site/Tokamak-Network-Onboarding-523bc627bd374326b5dfbec3d3b0a8e1',
      },
      {
        name: 'Partners',
        link: 'https://www.tokamak.network/#partners',
      },
    ],
  },
  {
    title: 'Mainnet',
    items: [
      {
        name: 'Titan',
        link: 'https://titan.tokamak.network/',
      },
    ],
  },
  {
    title: 'L2 On-Demand',
    items: [
      {
        name: 'Tokamak',
        super: 'OP',
        link: '/',
      },
      {
        name: 'Tokamak',
        super: 'ZK+',
        link: '/',
      },
    ],
  },
  {
    title: 'Ecosystem',
    items: [
      {
        name: 'Bridge & Swap',
        link: 'https://bridge.tokamak.network/',
      },
      {
        name: 'Staking',
        link: 'https://simple.staking.tokamak.network/staking',
      },
      {
        name: 'DAO',
        link: 'https://dao.tokamak.network/#/',
      },
      {
        name: 'Price Dashboard',
        link: 'https://price.tokamak.network/#/',
      },
      {
        name: 'Block Explorer',
        link: 'https://explorer.titan.tokamak.network/',
      },
    ],
  },
  {
    title: 'Developers',
    items: [
      {
        name: 'Grant',
        link: 'https://tokamak.notion.site/Tokamak-Network-Grant-Program-GranTON-f2384b458ea341a0987c7e73a909aa21',
      },
      {
        name: 'Github',
        link: 'https://github.com/tokamak-network',
      },
      {
        name: 'Documentation',
        link: 'https://docs.tokamak.network/home',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        name: 'Medium',
        link: 'https://medium.com/tokamak-network',
      },
      {
        name: 'X',
        link: 'https://x.com/tokamak_network',
      },
      {
        name: 'Discord',
        link: 'https://discord.com/invite/J4chV2zuAK',
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
