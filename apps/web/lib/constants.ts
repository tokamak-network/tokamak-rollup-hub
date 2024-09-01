export const opDevResource = {
  type: 'op',
  isDisabled: false,
  btnText: 'Choose',
  description:
    'Customized L2 stack built on Optimism, which offers fast and affordable computation and state updates by using optimistic rollup. Along with Optimism’s capabilities, this stack also includes a flexible transaction fee to enhance the user experience.',
  docsUrl: '#',
  superScriptColor: 'red',
};

export const zkDevResource = {
  type: 'zk+',
  isDisabled: true,
  btnText: 'Coming Soon',
  description:
    'Cutting-edge virtual machine for L2, designed to work with ZKSNARKS. It supports a previously unseen L2 rollup architecture that reduces computational complexity without compromising security or privacy.',
  docsUrl: '#',
  superScriptColor: 'green',
};

export const deployEnvironment = [
  {
    title: 'Devnet',
    description:
      'Deploy on devnet where you can run it in your local environment. It can be used during development and allows you to experiment before deploying to testnet or mainnet.',
    isDisabled: false,
  },
  {
    title: 'Testnet',
    description:
      'The Thanos Testnet is a test-only network built with the same environment as the mainnet so that you can risk-free test your applications and smart contracts before deploying them to the mainnet environment.',
    isDisabled: true,
  },
  {
    title: 'Mainnet',
    description:
      'Thanos Mainnet is an innovative L2 solution that inherits the security of Ethereum while enabling fast and secure blockchain services.',
    isDisabled: true,
  },
];
