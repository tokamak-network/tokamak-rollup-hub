'use client';
import { DevResourceCard } from '@/components/cards/dev-resource-card';
import { HorisonStack, VerticalStack } from './shape-stack-animation';
import { deployEnvironment, opDevResource, zkDevResource } from '@/lib/constants';
import { DataDisplayCard } from '@/components/cards/data-display-card';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { GeneralBtn } from '@/components/buttons/general-btn';
import Link from 'next/link';
import { FUNDING_REQUIREMENTS_URL } from '@/consts/urls';

// TODO: documents link
export default function Deploy() {
  const [selectedDevResource, setResource] = useState('');
  const [selectedEnv, setEnv] = useState('');
  const envRef = useRef<HTMLDivElement>(null);
  const devnetRef = useRef<HTMLDivElement>(null);
  const mainnetRef = useRef<HTMLDivElement>(null);

  const promiseResource = (type: string) =>
    new Promise((resolve) => {
      setResource(type);
      resolve(true);
    });

  const handleResourceClick = (type: string) => {
    promiseResource(type).then((message) => {
      if (message && envRef.current !== null) {
        envRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  const promiseEnvCard = async (title: string) => {
    const newEnv = selectedEnv === title.toLowerCase() ? '' : title.toLowerCase();
    await new Promise((resolve) => {
      setEnv(newEnv);
      resolve(true);
    });
    return newEnv !== '';
  };

  const handleEnvCardClick = async (title: string) => {
    const isEnvSet = await promiseEnvCard(title);
    if (isEnvSet) {
      if (title.toLowerCase() === 'devnet' && devnetRef.current) {
        devnetRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (title.toLowerCase() === 'mainnet' && mainnetRef.current) {
        mainnetRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex max-w-[355px] flex-col items-center py-[60px] md:max-w-[740px] xl:max-w-[1200px]">
      <h1 className="mb-[39px] text-4xl font-semibold">Deploy</h1>
      <div className="flex w-full flex-col items-center justify-center gap-[30px] md:flex-row">
        <div className="md:w-1/2">
          <div className="h-[200px] xl:h-[300px]">
            <VerticalStack />
          </div>
          <DevResourceCard
            type={opDevResource.type as 'op' | 'zk+'}
            btnText={opDevResource.btnText}
            isDisabled={opDevResource.isDisabled}
            description={opDevResource.description}
            handler={() => handleResourceClick(opDevResource.type)}
            superScriptColor={opDevResource.superScriptColor as 'red' | 'green'}
          />
        </div>
        <div className="md:w-1/2">
          <div className="h-[200px] xl:h-[300px]">
            <HorisonStack />
          </div>
          <DevResourceCard
            type={zkDevResource.type as 'op' | 'zk+'}
            btnText={zkDevResource.btnText}
            isDisabled={zkDevResource.isDisabled}
            description={zkDevResource.description}
            handler={() => handleResourceClick(zkDevResource.type)}
            superScriptColor={zkDevResource.superScriptColor as 'red' | 'green'}
          />
        </div>
      </div>
      <div
        className={clsx({
          block: selectedDevResource === 'op',
          hidden: selectedDevResource === '',
        })}
        ref={envRef}
      >
        <div className="mt-[120px] w-full">
          <h1 className="mb-[18px] text-center text-4xl font-semibold">Environment</h1>
          <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
            Select an environment to begin your rollup deployment.
          </p>
          <p className="text-center text-[18px] text-trh-gray xl:hidden">
            Thanos Sepolia testnet and mainnet are supported.
          </p>
        </div>
        <div className="mt-[39px] md:flex md:flex-row md:justify-center md:gap-[40px]">
          {deployEnvironment.map(({ title, description, isDisabled, isBeta }, index) => {
            return (
              <DataDisplayCard
                key={index}
                title={title}
                description={description}
                isDisabled={isDisabled}
                isBeta={isBeta}
                selectedState={selectedEnv}
                onClick={() => handleEnvCardClick(title)}
              />
            );
          })}
        </div>
      </div>
      <div
        className={clsx({
          block: selectedEnv === 'devnet',
          hidden: selectedEnv !== 'devnet',
        })}
        ref={devnetRef}
      >
        <div className="mt-[120px]">
          <h1 className="mb-[18px] text-center text-4xl font-semibold">Rollup Configuration</h1>
          <div className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
            <p>
              Devnet provides a local environment for configuring and testing Rollups or Appchains
            </p>
            <p>
              on your PC, offering default configurations along with pre-funded accounts for
              development purposes.
            </p>
          </div>
        </div>
        <div className="mt-[39px] flex w-full justify-center pb-[60px]">
          <Link href={'/deploy/devnet'}>
            <GeneralBtn isDisabled={false} text="Deploy Rollup" styleType="primary" size="2xl" />
          </Link>
        </div>
      </div>
      <div
        className={clsx('flex w-full flex-col gap-[39px]', {
          block: selectedEnv === 'mainnet',
          hidden: selectedEnv !== 'mainnet',
        })}
        ref={mainnetRef}
      >
        <div className="mt-[120px]">
          <h1 className="mb-[18px] text-center text-4xl font-semibold">
            Deployment Prerequisites and Features
          </h1>
          <div className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
            <p>
              Gain insights into the key prerequisites and capabilities of the Tokamak OP stack
              before proceeding to the deployment phase.
            </p>
          </div>
        </div>
        <div className="h-min-[293px] flex flex-col justify-center gap-[30px] md:flex-row">
          <div className="w-full rounded-2xl p-[18px] light:bg-white light:ring-1 light:ring-[#E8EDF2] dark:bg-gradient-card md:px-[30px] md:pt-[30px]">
            <div className="mb-[15px]">
              <h3 className="text-2xl">Requirements for Deployment</h3>
            </div>
            <ul className="list-decimal space-y-[10px] pl-[20px] text-[18px] font-medium leading-[27px] text-[#7E7E8F] dark:text-[#7D899A]">
              <li>
                <span>An AWS account</span>
              </li>
              <li>
                <span>Valid Chain ID and Contract Address of custom token.</span>
              </li>
              <li>
                <span>Funding requirements</span>
                <p className="mt-[10px] text-[15px]">
                  (Please refer&nbsp;
                  <a
                    href={FUNDING_REQUIREMENTS_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-tokamak-blue underline underline-offset-[3px]"
                  >
                    here
                  </a>
                  &nbsp;for detailed calculation)
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full rounded-2xl p-[18px] light:bg-white light:ring-1 light:ring-[#E8EDF2] dark:bg-gradient-card md:px-[30px] md:pb-[30px] md:pt-[30px]">
            <div className="mb-[15px]">
              <h3 className="text-2xl font-[600px]">Key Features/Capabilities</h3>
            </div>
            <ul className="list-decimal space-y-[10px] pl-[20px] text-[18px] font-medium leading-[27px] text-[#7E7E8F] dark:text-[#7D899A]">
              <li>
                <span>Automated scripts for quick mainnet deployment</span>
              </li>
              <li>
                <span>Custom native token support for L2 networks</span>
              </li>
              <li>
                <span>Mini bridge Integration</span>
              </li>
              <li>
                <span>Comprehensive SDK for developers</span>
              </li>
              <li>
                <span>Integrated Fault proof System (Optional)</span>
              </li>
              <li>
                <span>Blockscout-based block explorer (Optional)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full justify-center pb-[60px]">
          <Link href={'/deploy/mainnet'}>
            <GeneralBtn isDisabled={false} text="Deploy Rollup" styleType="primary" size="2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
