'use client';
import { VersionTable } from '@/components/tables/version-table';
import JsonView from '@/components/pretty-view/json-view';
import { leftSectionGuide } from './guide-steps';
import { StepCard } from '@/components/cards/step-card';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { devnetTemplate } from '@/lib/constants';

// TODO: documents link
export default function DeployDevnetPage() {
  const [mount, setMount] = useState<boolean>(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  return (
    <div className="max-w-[355px] items-center py-[60px] md:max-w-[740px] xl:max-w-[1200px] xl:flex-row">
      <h1 className="mb-[39px] text-center text-4xl font-semibold">Devnet Deployment Guide</h1>
      <div className="flex flex-col xl:flex-row">
        <div className="flex w-full flex-col gap-[33px] p-5 xl:w-1/2">
          <h3 className="block text-[21px] font-semibold">How to deploy rollup locally</h3>
          <p className="-mt-[18px] font-medium text-[#7E7E8F] dark:text-[#7D899A]">
            Please refer to this {''}
            <Link
              href={
                'https://docs.tokamak.network/home/~/changes/9197pJPwvweJ6nTq8KSm/service-guide/rollup-hub/devnet/step-by-step-guide#process-guide-for-devnet-deployment'
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-tokamak-blue underline underline-offset-2">documents</span>
            </Link>
            {''} for any prerequisite installations before deploying the rollup in your local
            environment.
          </p>
          <VersionTable />
          {leftSectionGuide.map((step, index) => {
            if (step.jsonDownloadBtnProps && template !== null) {
              step.jsonDownloadBtnProps.json = JSON.stringify(template);
            }
            return <StepCard key={index} {...step} />;
          })}
        </div>
        <div className="-mt-[7px] flex w-full flex-col gap-[33px] p-5 xl:mt-0 xl:w-1/2">
          <div className="flex w-full flex-col gap-5 rounded-2xl p-5 light:ring-1 light:ring-[#E8EDF2] dark:bg-gradient-card xl:max-h-[1290px]">
            <h3 className="text-xl font-semibold">Rollup information</h3>
            <div className="overflow-auto rounded-2xl p-4 light:ring-1 light:ring-[#E8EDF2] dark:bg-black">
              <JsonView contents={JSON.stringify(devnetTemplate)} theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
