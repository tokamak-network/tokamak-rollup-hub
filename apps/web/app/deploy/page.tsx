'use client';
import { DevResourceCard } from '@/components/cards/dev-resource-card';
import { HorisonStack, VetrticalStack } from './shape-stack-animation';
import { deployEnvironment, opDevResource, zkDevResource } from '@/lib/constants';
import { DataDisplayCard } from '@/components/cards/data-display-card';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { GeneralBtn } from '@/components/buttons/general-btn';
import Link from 'next/link';

// TODO: documents link
export default function Deploy() {
  const [selectedDevResource, setResource] = useState('');
  const [selectedEnv, setEnv] = useState('');
  const envRef = useRef<HTMLDivElement>(null);
  const rollupConfRef = useRef<HTMLDivElement>(null);

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

  const promiseEnvCard = (title: string) =>
    new Promise((resolve) => {
      if (selectedEnv === '') {
        setEnv(title.toLowerCase());
        resolve(true);
      } else {
        setEnv('');
        resolve(false);
      }
    });

  const handleEnvCardClick = (title: string) => {
    promiseEnvCard(title).then((message) => {
      if (message && rollupConfRef.current !== null) {
        rollupConfRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  return (
    <div className="flex max-w-[355px] flex-col items-center py-[60px] md:max-w-[740px] xl:max-w-[1200px]">
      <h1 className="mb-[39px] text-4xl font-semibold">Deploy</h1>
      <div className="flex w-full flex-col items-center justify-center gap-[30px] md:flex-row">
        <div className="md:w-1/2">
          <div className="h-[200px] xl:h-[300px]">
            <VetrticalStack />
          </div>
          <DevResourceCard
            type={opDevResource.type as 'op' | 'zk+'}
            btnText={opDevResource.btnText}
            isDisabled={opDevResource.isDisabled}
            description={opDevResource.description}
            docsUrl={opDevResource.docsUrl}
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
            docsUrl={zkDevResource.docsUrl}
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
            Choose an environment to create your own rollups.{' '}
            <span className="hidden xl:inline">
              Thanos Sepolia testnet and mainnet are supported.
            </span>
          </p>
          <p className="text-center text-[18px] text-trh-gray xl:hidden">
            Thanos Sepolia testnet and mainnet are supported.
          </p>
        </div>
        <div className="mt-[39px] md:flex md:gap-[25px]">
          {deployEnvironment.map(({ title, description, isDisabled }, index) => {
            return (
              <DataDisplayCard
                key={index}
                title={title}
                description={description}
                isDisabled={isDisabled}
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
          hidden: selectedEnv === '',
        })}
        ref={rollupConfRef}
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
    </div>
  );
}
