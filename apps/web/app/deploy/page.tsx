import { DevResourceCard } from '@/components/cards/dev-resource-card';
import { HorisonStack, VetrticalStack } from './shape-stack-animation';
import { deployEnvironment, opDevResource, zkDevResource } from '@/lib/constants';
import { DataDisplayCard } from '@/components/cards/data-display-card';
import Link from 'next/link';
import { FormDevnet } from './(devnet)/form-devnet';

export default function Deploy() {
  return (
    <div className="flex max-w-[355px] flex-col items-center md:max-w-[740px] xl:max-w-[1200px]">
      <h1 className="mb-[39px] text-4xl font-semibold">Deploy</h1>
      <div className="flex w-full flex-col items-center justify-center gap-[30px] md:flex-row">
        <div className="md:w-1/2">
          <div className="h-[200px] xl:h-[300px]">
            <VetrticalStack />
          </div>
          <DevResourceCard devResourceProps={opDevResource} />
        </div>
        <div className="md:w-1/2">
          <div className="h-[200px] xl:h-[300px]">
            <HorisonStack />
          </div>
          <DevResourceCard devResourceProps={zkDevResource} />
        </div>
      </div>
      <div className='invisible'>
        <div className="mt-[120px] w-full">
          <h1 className="mb-[18px] text-center text-4xl font-semibold">Environment</h1>
          <p className="text-center text-[18px] text-trh-gray">
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
              />
            );
          })}
        </div>
      </div>
      <div className='invisible'>
        <div className="mt-[120px]">
          <h1 className="mb-[18px] text-center text-4xl font-semibold">Your Rollup Details</h1>
          <div className="text-center text-[18px] text-trh-gray">
            <p>Enter the information required for your own rollup.</p>
            <p>
              If you&apos;re looking for more information on each of these items, check out these{' '}
              <Link href={'#'}>
                <span className="text-tokamak-blue underline underline-offset-2">documents.</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-[39px] w-full pb-[60px]">
          <FormDevnet />
        </div>
      </div>
    </div>
  );
}
