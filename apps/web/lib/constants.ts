// TODO: documents link
export const opDevResource = {
  type: 'op',
  isDisabled: false,
  btnText: 'Choose',
  description:
    'A tailored Layer 2 stack built on Optimism, offering fast and low-cost computation and state updates using optimistic rollup technology. Along with a flexible transaction fee structure, this stack introduces seigniorage as an additional revenue source for operators, and other features to optimize the user experience.',
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
    description:
      'Deploy in devnet mode to run your rollup or Appchain locally. This approach is ideal for development and testing before moving to a Testnet or Mainnet deployment.',
    isDisabled: false,
  },
  {
    title: 'Testnet',
    description:
      'Deploy your Rollup or Appchain in Testnet mode using the TRH service. Inspired from the Thanos testnet, this mode ensures robust security, tools, and features for seamless deployment and functionality.',
    isDisabled: true,
  },
  {
    title: 'Mainnet',
    description:
      'Deploy your Rollup or Appchain in Mainnet mode using our Tokamak OP Stack, benefiting from Ethereum’s security. Enjoy additional features such as custom fee token for your appchain, extra incentives in TON for operators, and participation in the Tokamak DAO.',
    isDisabled: true,
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
  l1ChainID: number;
  l2ChainID: number;
  l2BlockTime: number;
  nativeTokenName: string;
  nativeTokenSymbol: string;
  nativeTokenAddress: string;
  setPrecompileBalances: boolean;
  maxSequencerDrift: number;
  sequencerWindowSize: number;
  channelTimeout: number;
  p2pSequencerAddress: string;
  batchInboxAddress: string;
  batchSenderAddress: string;
  cliqueSignerAddress: string;
  l1UseClique: boolean;
  l1StartingBlockTag: string;
  l2OutputOracleSubmissionInterval: number;
  l2OutputOracleStartingTimestamp: number;
  l2OutputOracleStartingBlockNumber: number;
  l2OutputOracleProposer: string;
  l2OutputOracleChallenger: string;
  l2GenesisBlockGasLimit: string;
  l1BlockTime: number;
  baseFeeVaultRecipient: string;
  l1FeeVaultRecipient: string;
  sequencerFeeVaultRecipient: string;
  baseFeeVaultMinimumWithdrawalAmount: string;
  l1FeeVaultMinimumWithdrawalAmount: string;
  sequencerFeeVaultMinimumWithdrawalAmount: string;
  baseFeeVaultWithdrawalNetwork: number;
  l1FeeVaultWithdrawalNetwork: number;
  sequencerFeeVaultWithdrawalNetwork: number;
  proxyAdminOwner: string;
  finalSystemOwner: string;
  superchainConfigGuardian: string;
  finalizationPeriodSeconds: number;
  fundDevAccounts: boolean;
  l2GenesisBlockBaseFeePerGas: string;
  gasPriceOracleOverhead: number;
  gasPriceOracleScalar: number;
  gasPriceOracleBaseFeeScalar: number;
  gasPriceOracleBlobBaseFeeScalar: number;
  enableGovernance: boolean;
  governanceTokenSymbol: string;
  governanceTokenName: string;
  governanceTokenOwner: string;
  eip1559Denominator: number;
  eip1559DenominatorCanyon: number;
  eip1559Elasticity: number;
  l1GenesisBlockTimestamp: string;
  l2GenesisRegolithTimeOffset: string;
  l2GenesisDeltaTimeOffset: string | null;
  l2GenesisCanyonTimeOffset: string;
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
  usePlasma: boolean;
  daCommitmentType: string;
  daChallengeWindow: number;
  daResolveWindow: number;
  daBondSize: number;
  daResolverRefundPercentage: number;
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
