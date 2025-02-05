// TODO: documents link
export const opDevResource = {
  type: 'op',
  isDisabled: false,
  btnText: 'Choose',
  description:
    'A customized fork of the OP Stack that enables ERC20 tokens as the native currency for the L2 chain.',
  docsUrl:
    'https://docs.tokamak.network/home/service-guide/rollup-hub/devnet/discover-l2-stack#tokamak-op',
  superScriptColor: 'red',
};

// TODO: documents link
export const zkDevResource = {
  type: 'zk+',
  isDisabled: true,
  btnText: 'Coming Soon',
  description:
    'An advanced virtual machine for Layer 2, optimized for compatibility with ZKSNARKS. It features an innovative L2 rollup architecture that reduces computational complexity while preserving security and privacy.',
  docsUrl:
    'https://docs.tokamak.network/home/service-guide/rollup-hub/devnet/discover-l2-stack#tokamak-zk-coming-soon',
  superScriptColor: 'green',
};

export const deployEnvironment = [
  {
    title: 'Devnet',
    description: 'Use Devnet mode to run your rollup or Appchain locally for development.',
    isDisabled: false,
    isBeta: false,
  },
  {
    title: 'Mainnet',
    description: 'Use Mainnet mode to run your Tokamak OP-based rollup or Appchain on the mainnet.',
    isDisabled: false,
    isBeta: true,
  },
];

export const devnetTemplate = {
  l1ChainID: 900,
  l2ChainID: 901,
  l2BlockTime: 2,
  nativeTokenName: 'Tokamak Network Token',
  nativeTokenSymbol: 'TON',
  nativeTokenAddress: '0x75fE809aE1C4A66c27a0239F147d0cc5710a104A',
  setPrecompileBalances: false,
  maxSequencerDrift: 300,
  sequencerWindowSize: 200,
  channelTimeout: 120,
  p2pSequencerAddress: '0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
  batchInboxAddress: '0xff00000000000000000000000000000000000901',
  batchSenderAddress: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
  cliqueSignerAddress: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  l1UseClique: true,
  l1StartingBlockTag: 'earliest',
  l2OutputOracleSubmissionInterval: 10,
  l2OutputOracleStartingTimestamp: 0,
  l2OutputOracleStartingBlockNumber: 0,
  l2OutputOracleProposer: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  l2OutputOracleChallenger: '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65',
  l2GenesisBlockGasLimit: '0x1c9c380',
  l1BlockTime: 3,
  baseFeeVaultRecipient: '0x14dC79964da2C08b23698B3D3cc7Ca32193d9955',
  l1FeeVaultRecipient: '0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f',
  sequencerFeeVaultRecipient: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
  baseFeeVaultMinimumWithdrawalAmount: '0x8ac7230489e80000',
  l1FeeVaultMinimumWithdrawalAmount: '0x8ac7230489e80000',
  sequencerFeeVaultMinimumWithdrawalAmount: '0x8ac7230489e80000',
  baseFeeVaultWithdrawalNetwork: 0,
  l1FeeVaultWithdrawalNetwork: 0,
  sequencerFeeVaultWithdrawalNetwork: 0,
  proxyAdminOwner: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
  finalSystemOwner: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
  superchainConfigGuardian: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
  finalizationPeriodSeconds: 2,
  fundDevAccounts: true,
  l2GenesisBlockBaseFeePerGas: '0x1',
  gasPriceOracleOverhead: 2100,
  gasPriceOracleScalar: 1000000,
  gasPriceOracleBaseFeeScalar: 1368,
  gasPriceOracleBlobBaseFeeScalar: 810949,
  enableGovernance: true,
  governanceTokenSymbol: 'OP',
  governanceTokenName: 'Optimism',
  governanceTokenOwner: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
  eip1559Denominator: 50,
  eip1559DenominatorCanyon: 250,
  eip1559Elasticity: 6,
  l1GenesisBlockTimestamp: '0x64c811bf',
  l2GenesisRegolithTimeOffset: '0x0',
  l2GenesisDeltaTimeOffset: null,
  l2GenesisCanyonTimeOffset: '0x0',
  systemConfigStartBlock: 0,
  requiredProtocolVersion: '0x0000000000000000000000000000000000000000000000000000000000000000',
  recommendedProtocolVersion: '0x0000000000000000000000000000000000000000000000000000000000000000',
  faultGameAbsolutePrestate: '0x03c7ae758795765c6664a5d39bf63841c71ff191e9189522bad8ebff5d4eca98',
  faultGameMaxDepth: 50,
  faultGameClockExtension: 0,
  faultGameMaxClockDuration: 1200,
  faultGameGenesisBlock: 0,
  faultGameGenesisOutputRoot: '0xDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEF',
  faultGameSplitDepth: 14,
  faultGameWithdrawalDelay: 604800,
  preimageOracleMinProposalSize: 10000,
  preimageOracleChallengePeriod: 120,
  proofMaturityDelaySeconds: 12,
  disputeGameFinalityDelaySeconds: 6,
  respectedGameType: 254,
  useFaultProofs: true,
  usePlasma: false,
  daCommitmentType: 'KeccakCommitment',
  daChallengeWindow: 160,
  daResolveWindow: 160,
  daBondSize: 1000000,
  daResolverRefundPercentage: 0,
  l1UsdcAddr: '0x2910E325cf29dd912E3476B61ef12F49cb931096',
  usdcTokenName: 'Bridged USDC (Tokamak Network)',
  newPauser: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
  newBlacklister: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
  masterMinterOwner: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
  fiatTokenOwner: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
  factoryV2addr: '0x0000000000000000000000000000000000000000',
  nativeCurrencyLabelBytes: [
    84, 87, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ],
  uniswapV3FactoryOwner: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
  uniswapV3FactoryFee500: 500,
  uniswapV3FactoryTickSpacing10: 10,
  uniswapV3FactoryFee3000: 3000,
  uniswapV3FactoryTickSpacing60: 60,
  uniswapV3FactoryFee10000: 10000,
  uniswapV3FactoryTickSpacing200: 200,
  uniswapV3FactoryFee100: 100,
  uniswapV3FactoryTickSpacing1: 1,
  pairInitCodeHash: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  poolInitCodeHash: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
  universalRouterRewardsDistributor: '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720',
};

export interface MainnetTemplate {
  nativeTokenName: string;
  nativeTokenSymbol: string;
  nativeTokenAddress: string;
  finalSystemOwner: string;
  superchainConfigGuardian: string;
  l1StartingBlockTag: string;
  l1ChainID: number;
  l2ChainID: number;
  l2BlockTime: number;
  l1BlockTime: number;
  maxSequencerDrift: number;
  sequencerWindowSize: number;
  channelTimeout: number;
  p2pSequencerAddress: string;
  batchInboxAddress: string;
  batchSenderAddress: string;
  l2OutputOracleSubmissionInterval: number;
  l2OutputOracleStartingTimestamp: number;
  l2OutputOracleStartingBlockNumber: number;
  l2OutputOracleProposer: string;
  l2OutputOracleChallenger: string;
  finalizationPeriodSeconds: number;
  proxyAdminOwner: string;
  baseFeeVaultRecipient: string;
  l1FeeVaultRecipient: string;
  sequencerFeeVaultRecipient: string;
  baseFeeVaultMinimumWithdrawalAmount: string;
  l1FeeVaultMinimumWithdrawalAmount: string;
  sequencerFeeVaultMinimumWithdrawalAmount: string;
  baseFeeVaultWithdrawalNetwork: number;
  l1FeeVaultWithdrawalNetwork: number;
  sequencerFeeVaultWithdrawalNetwork: number;
  enableGovernance: boolean;
  governanceTokenName: string;
  governanceTokenSymbol: string;
  governanceTokenOwner: string;
  l2GenesisBlockGasLimit: string;
  l2GenesisBlockBaseFeePerGas: string;
  gasPriceOracleOverhead: number;
  gasPriceOracleScalar: number;
  eip1559Denominator: number;
  eip1559Elasticity: number;
  eip1559DenominatorCanyon: number;
  l2GenesisRegolithTimeOffset: string;
  l2GenesisCanyonTimeOffset: string;
  l2GenesisDeltaTimeOffset: string;
  l2GenesisEcotoneTimeOffset: string;
  systemConfigStartBlock: number;
  requiredProtocolVersion: string;
  recommendedProtocolVersion: string;
  faultGameAbsolutePrestate: string;
  faultGameMaxDepth: number;
  faultGameClockExtension: number;
  faultGameMaxClockDuration: number;
  faultGameGenesisBlock: number;
  faultGameGenesisOutputRoot: string;
  faultGameSplitDepth: number;
  faultGameWithdrawalDelay: number;
  preimageOracleMinProposalSize: number;
  preimageOracleChallengePeriod: number;
  proofMaturityDelaySeconds: number;
  disputeGameFinalityDelaySeconds: number;
  respectedGameType: number;
  useFaultProofs: boolean;
  l1UsdcAddr: string;
  usdcTokenName: string;
  newPauser: string;
  newBlacklister: string;
  masterMinterOwner: string;
  fiatTokenOwner: string;
  factoryV2addr: string;
  nativeCurrencyLabelBytes: number[];
  uniswapV3FactoryOwner: string;
  uniswapV3FactoryFee500: number;
  uniswapV3FactoryTickSpacing10: number;
  uniswapV3FactoryFee3000: number;
  uniswapV3FactoryTickSpacing60: number;
  uniswapV3FactoryFee10000: number;
  uniswapV3FactoryTickSpacing200: number;
  uniswapV3FactoryFee100: number;
  uniswapV3FactoryTickSpacing1: number;
  pairInitCodeHash: string;
  poolInitCodeHash: string;
  universalRouterRewardsDistributor: string;
}

export const mainnetTemplate: MainnetTemplate = {
  nativeTokenName: 'Tokamak Network Token',
  nativeTokenSymbol: 'TON',
  nativeTokenAddress: '0xa30fe40285b8f5c0457dbc3b7c8a280373c40044',
  finalSystemOwner: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  superchainConfigGuardian: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  l1StartingBlockTag: '0x9818c444d84ad21958e9ca732d823ee1c82a32ccc552221b11290322207a940a',
  l1ChainID: 1,
  l2ChainID: 111551119091,
  l2BlockTime: 2,
  l1BlockTime: 12,
  maxSequencerDrift: 600,
  sequencerWindowSize: 3600,
  channelTimeout: 300,
  p2pSequencerAddress: '0x7C5eB5435b5707CD11d6b00b46033D94c13A795a',
  batchInboxAddress: '0xff00000000000000000000000033111551119191',
  batchSenderAddress: '0xa088aC46C4348F9a3d14F5297419753877dEAdB8',
  l2OutputOracleSubmissionInterval: 10800,
  l2OutputOracleStartingTimestamp: 1734406752,
  l2OutputOracleStartingBlockNumber: 0,
  l2OutputOracleProposer: '0x598b68fe7C3e8018be776a381167780e09410D0A',
  l2OutputOracleChallenger: '0x8d7327aF793757D3a959A5b70cfC50447bB49216',
  finalizationPeriodSeconds: 12,
  proxyAdminOwner: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  baseFeeVaultRecipient: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  l1FeeVaultRecipient: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  sequencerFeeVaultRecipient: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  baseFeeVaultMinimumWithdrawalAmount: '0x8ac7230489e80000',
  l1FeeVaultMinimumWithdrawalAmount: '0x8ac7230489e80000',
  sequencerFeeVaultMinimumWithdrawalAmount: '0x8ac7230489e80000',
  baseFeeVaultWithdrawalNetwork: 0,
  l1FeeVaultWithdrawalNetwork: 0,
  sequencerFeeVaultWithdrawalNetwork: 0,
  enableGovernance: false,
  governanceTokenName: 'Optimism',
  governanceTokenSymbol: 'OP',
  governanceTokenOwner: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  l2GenesisBlockGasLimit: '0x1c9c380',
  l2GenesisBlockBaseFeePerGas: '0x3b9aca00',
  gasPriceOracleOverhead: 188,
  gasPriceOracleScalar: 684000,
  eip1559Denominator: 50,
  eip1559Elasticity: 6,
  eip1559DenominatorCanyon: 250,
  l2GenesisRegolithTimeOffset: '0x0',
  l2GenesisCanyonTimeOffset: '0x0',
  l2GenesisDeltaTimeOffset: '0x0',
  l2GenesisEcotoneTimeOffset: '0x0',
  systemConfigStartBlock: 0,
  requiredProtocolVersion: '0x0000000000000000000000000000000000000003000000010000000000000000',
  recommendedProtocolVersion: '0x0000000000000000000000000000000000000003000000010000000000000000',
  faultGameAbsolutePrestate: '0x03ab262ce124af0d5d328e09bf886a2b272fe960138115ad8b94fdc3034e3155',
  faultGameMaxDepth: 73,
  faultGameClockExtension: 10800,
  faultGameMaxClockDuration: 302400,
  faultGameGenesisBlock: 0,
  faultGameGenesisOutputRoot: '0xDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEF',
  faultGameSplitDepth: 30,
  faultGameWithdrawalDelay: 604800,
  preimageOracleMinProposalSize: 126000,
  preimageOracleChallengePeriod: 86400,
  proofMaturityDelaySeconds: 604800,
  disputeGameFinalityDelaySeconds: 302400,
  respectedGameType: 0,
  useFaultProofs: false,
  l1UsdcAddr: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  usdcTokenName: 'Bridged USDC (Tokamak Network)',
  newPauser: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  newBlacklister: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  masterMinterOwner: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  fiatTokenOwner: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  factoryV2addr: '0x0000000000000000000000000000000000000000',
  nativeCurrencyLabelBytes: [
    84, 87, 79, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ],
  uniswapV3FactoryOwner: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
  uniswapV3FactoryFee500: 500,
  uniswapV3FactoryTickSpacing10: 10,
  uniswapV3FactoryFee3000: 3000,
  uniswapV3FactoryTickSpacing60: 60,
  uniswapV3FactoryFee10000: 10000,
  uniswapV3FactoryTickSpacing200: 200,
  uniswapV3FactoryFee100: 100,
  uniswapV3FactoryTickSpacing1: 1,
  pairInitCodeHash: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  poolInitCodeHash: '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
  universalRouterRewardsDistributor: '0x7b91111ec983c13b3C2F36C8A84a5099225786FA',
};

export const fqaContent = [
  {
    title: 'Has the code undergone an audit? If so, could you share the audit details?',
    content:
      'L2 Native Token Bridge in Thanos Stack has been audited by Sherlock. Please refer to {{Audit report}}.',
    links: {
      'Audit report':
        'https://drive.google.com/drive/u/1/folders/1JE8_aMI6y6-yxq88Tu0TxA06flEBSkWH',
    },
  },
  {
    title: 'What is the relationship between Thanos and the Tokamak OP Stack?',
    content:
      'Tokamak OP and Tokamak ZK+ are service classifications based on roll-up method and the Thanos Stack is L2 stack that is included in Tokamak OP. If the LeanBase Stack is released next year, it will fit inside Tokamak OP. So the Tokamak OP is to support two L2 stacks.',
    links: {},
  },
  {
    title: 'Can any token be configured as the native token in the deployment?',
    content: 'No. We have a requirement for selecting native token. Please refer to {{here}}.',
    links: {
      here: 'https://www.notion.so/tokamak/1-Overview-137d96a400a380ce9d38e73035fbeaca?pvs=4#12fd96a400a38168af40f6ff221da460',
    },
  },
  {
    title: 'How is the mini bridge different from a fully functional bridge?',
    content:
      'The mini bridge includes essential features for depositing and withdrawing limited tokens but lacks the enhanced user experience and transaction history found in a fully functional backend-supported bridge.',
    links: {},
  },
];
