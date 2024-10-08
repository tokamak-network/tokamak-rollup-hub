import { StepCardProps } from '@/components/cards/step-card';

export const leftSectionGuide: StepCardProps[] = [
  {
    step: 1,
    descriptions: [
      {
        text: 'Before deploying Devnet, you must first install and version check the required software to run the system. Please make sure you have the appropriate versions installed before proceeding with the deployment.',
        fontStyle: 'medium',
        margin: true,
      },
      {
        text: "※ For Mac OS users, we've configured a script to allow for a one-step installation. After you Git clone the repo per Step 2 below, enter the following script to complete the Dependencies installation.",
        fontStyle: 'normal',
        margin: false,
      },
    ],
    copyInputProps: {
      text: 'install-for-mac.sh',
    },
  },
  {
    step: 2,
    descriptions: [
      {
        text: 'copy the repository below to the PCs you want to deploy locally.',
        fontStyle: 'medium',
        margin: false,
      },
    ],
    copyInputProps: {
      text: 'git clone https://github.com/tokamak-network/tokamak-thanos',
    },
  },
  {
    step: 5,
    descriptions: [
      {
        text: 'Go to the repository you cloned and type make build. This will install the various files for the rollup deployment.',
        fontStyle: 'medium',
        margin: false,
      },
    ],
    copyInputProps: {
      text: 'make build',
    },
  },
  {
    step: 6,
    descriptions: [
      {
        text: 'When all is done, type make devnet-up to deploy the rollup with the information from the build.',
        fontStyle: 'medium',
        margin: false,
      },
    ],
    copyInputProps: {
      text: 'make devnet-up',
    },
  },
];
