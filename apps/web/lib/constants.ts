import { DevResourceProps } from '@/components/cards/dev-resource-card';

export const opDevResource: DevResourceProps = {
  type: 'op',
  isActive: true,
  description:
    'Customized L2 stack built on Optimism, which offers fast and affordable computation and state updates by using optimistic rollup. Along with Optimism’s capabilities, this stack also includes a flexible transaction fee to enhance the user experience.',
  docsUrl: '#',
  superScriptColor: 'red',
};

export const zkDevResource: DevResourceProps = {
  type: 'zk+',
  isActive: false,
  description:
    'Cutting-edge virtual machine for L2, designed to work with ZKSNARKS. It supports a previously unseen L2 rollup architecture that reduces computational complexity without compromising security or privacy.',
  docsUrl: '#',
  superScriptColor: 'green',
};

  {
    type: 'op',
    isActive: true,
    description:
      'Customized L2 stack built on Optimism, which offers fast and affordable computation and state updates by using optimistic rollup. Along with Optimism’s capabilities, this stack also includes a flexible transaction fee to enhance the user experience.',
    docsUrl: '#',
    superScriptColor: 'red',
  },
  {
    type: 'zk',
    isActive: false,
    description:
      'Cutting-edge virtual machine for L2, designed to work with ZKSNARKS. It supports a previously unseen L2 rollup architecture that reduces computational complexity without compromising security or privacy.',
    docsUrl: '#',
    superScriptColor: 'green',
  },
];
