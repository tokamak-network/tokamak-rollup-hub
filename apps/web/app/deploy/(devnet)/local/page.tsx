'use client';
import { GeneralBtn } from '@/components/buttons/general-btn';
import JSONPretty from 'react-json-pretty';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { CopyBtn } from '@/components/buttons/copy-button';

const downloadJson = (data: any, filename: string) => {
  const blob = new Blob([data], { type: 'application/json' });
  const href = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function DownloadBtn() {
  const searchParams = useSearchParams();
  const template = searchParams.get('template');

  return (
    <GeneralBtn
      text="Download File"
      isDisabled={false}
      styleType="primary"
      size="md"
      onClick={() => downloadJson(template, 'devnetL1-template.json')}
    />
  );
}

function JSONView() {
  const searchParams = useSearchParams();
  const template = searchParams.get('template');

  return (
    <JSONPretty
      style={{ fontSize: '0.8rem' }}
      data={template}
      theme={{
        key: 'color:#92E391',
        string: 'color:#ABD6FC',
        value: 'color:#82C0FA',
        boolean: 'color:#82C0FA',
      }}
    ></JSONPretty>
  );
}

export default function LocalDeployPage() {
  const cloneRepoValue = 'git clone https://github.com/tokamak-network/tokamak-thanos';
  const makeBuildValue = 'make build';
  const devnetUpValue = 'make devnet-up';
  const cdGettingStartedValue = 'cd packages/tokamak/contract-bedrock/scripts/getting-started';
  const versionScriptValue = './versions.sh';
  const dockerComposeVersionValue = 'docker compose version';

  return (
    <div className="xl:flex-rowitems-center max-w-[355px] md:max-w-[740px] xl:max-w-[1200px]">
      <h1 className="mb-[39px] text-center text-4xl font-semibold">Local Deployment Guide</h1>
      <div className="flex flex-col xl:flex-row">
        <div className="flex w-full flex-col gap-[33px] p-5 xl:w-1/2">
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[21px] font-semibold">How to deploy rollup locally</h3>
            <div className="font-medium text-[#7D899A]">
              <p className="mb-[15px]">
                Please refer to this document for any prerequisite installations before deploying
                the rollup in your local environment.
              </p>
              <p>
                Download the JSON file generated based on your input. Your own rollup will be
                created.
              </p>
            </div>
            <Suspense fallback={<h1>Loding...</h1>}>
              <DownloadBtn />
            </Suspense>
          </div>
          <div className="flex flex-col gap-[9px]">
            <p className="font-medium text-[#7D899A]">
              First, copy the repository below to the PCs you want to deploy locally.
            </p>
            <div className="flex w-full items-center justify-between gap-2 rounded-xl border-[1px] border-[#192232] bg-[#080A0E] px-[15px] py-[10px]">
              <input
                type="text"
                value={cloneRepoValue}
                className="w-full overflow-x-scroll bg-transparent text-white caret-tokamak-blue outline-none"
                readOnly
              />
              <CopyBtn text={cloneRepoValue} />
            </div>
          </div>
          <div className="flex flex-col gap-[9px]">
            <div className="font-medium text-[#7D899A]">
              <p className="mb-[15px]">json file and overwrite it with devnetL1-template.json.</p>
              <p className="mb-[15px]">
                Go to the repository you cloned and type make build. This will install the various
                files for the rollup deployment.
              </p>
            </div>
            <div className="flex w-full items-center justify-between gap-2 rounded-xl border-[1px] border-[#192232] bg-[#080A0E] px-[15px] py-[10px]">
              <input
                type="text"
                value={makeBuildValue}
                className="w-full overflow-x-scroll bg-transparent text-white caret-tokamak-blue outline-none"
                readOnly
              />
              <CopyBtn text={makeBuildValue} />
            </div>
          </div>
          <div className="flex flex-col gap-[9px]">
            <p className="font-medium text-[#7D899A]">
              When all is done, type make devnet-up to deploy the rollup with the information from
              the build.
            </p>
            <div className="flex w-full items-center justify-between gap-2 rounded-xl border-[1px] border-[#192232] bg-[#080A0E] px-[15px] py-[10px]">
              <input
                type="text"
                value={devnetUpValue}
                className="w-full overflow-x-scroll bg-transparent text-white caret-tokamak-blue outline-none"
                readOnly
              />
              <CopyBtn text={devnetUpValue} />
            </div>
          </div>
          <div className="flex flex-col gap-[9px]">
            <p className="font-medium text-[#7D899A]">
              If you need to check the version of a dependency you installed, type the following{' '}
            </p>
            <div className="flex flex-col gap-[15px]">
              <div className="flex w-full items-center justify-between gap-2 rounded-xl border-[1px] border-[#192232] bg-[#080A0E] px-[15px] py-[10px]">
                <input
                  type="text"
                  value={cdGettingStartedValue}
                  className="w-full overflow-x-scroll bg-transparent text-white caret-tokamak-blue outline-none"
                  readOnly
                />
                <CopyBtn text={cdGettingStartedValue} />
              </div>
              <div className="flex w-full items-center justify-between gap-2 rounded-xl border-[1px] border-[#192232] bg-[#080A0E] px-[15px] py-[10px]">
                <input
                  type="text"
                  value={versionScriptValue}
                  className="w-full overflow-x-scroll bg-transparent text-white caret-tokamak-blue outline-none"
                  readOnly
                />
                <CopyBtn text={versionScriptValue} />
              </div>
              <div className="flex w-full items-center justify-between gap-2 rounded-xl border-[1px] border-[#192232] bg-[#080A0E] px-[15px] py-[10px]">
                <input
                  type="text"
                  value={dockerComposeVersionValue}
                  className="w-full overflow-x-scroll bg-transparent text-white caret-tokamak-blue outline-none"
                  readOnly
                />
                <CopyBtn text={dockerComposeVersionValue} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 rounded-2xl bg-gradient-card p-5 xl:max-h-[950px] xl:w-1/2">
          <h3 className="text-xl font-semibold">Rollup information</h3>
          <div className="overflow-auto rounded-2xl bg-black p-4">
            <Suspense>
              <JSONView />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
