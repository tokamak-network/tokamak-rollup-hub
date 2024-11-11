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
      {
        name: 'Partners & Grant',
        link: 'https://www.tokamak.network/#partners',
      },
    ],
  },
  {
    title: 'L2 Mainnet',
    items: [
      {
        name: 'Titan',
        link: 'https://titan.tokamak.network/',
      },
      {
        name: 'Titan multi link',
        link: '#',
        multiLink: {
          items: [
            {
              name: 'ㄴExplorer',
              link: 'https://explorer.titan.tokamak.network/',
            },
            {
              name: ' / Bridge',
              link: 'https://bridge.tokamak.network/',
            },
          ],
        },
      },
    ],
  },
  {
    title: 'Developer',
    items: [
      {
        name: 'Grant',
        link: 'https://tokamak.notion.site/Tokamak-Network-Grant-Program-GranTON-f2384b458ea341a0987c7e73a909aa21',
      },
      {
        name: 'GitHub',
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
        name: 'X (Twitter)',
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
