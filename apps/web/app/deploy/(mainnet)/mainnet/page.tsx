'use client';
import { useEffect, useState } from 'react';
import { FormMainnet } from '../form-mainnet';
import Image from 'next/image';
import vStack1 from '@/public/vertical-shape-stack-1.svg';
import vStack2 from '@/public/vertical-shape-stack-2.svg';
import vStack3 from '@/public/vertical-shape-stack-3.svg';
import { Accordion } from '@/components/accordion/accordion';
import { fqaContent } from '@/lib/constants';
import { useParams } from 'next/navigation';
import githubIconLight from '@/public/icon-github-light.svg';
import docsIconLight from '@/public/icon-docs-light.svg';
import githubIconDark from '@/public/icon-github-dark.svg';
import docsIconDark from '@/public/icon-docs-dark.svg';

// TODO: documents link
export default function DeployMainnetPage() {
  const [mount, setMount] = useState<boolean>(false);
  const pathname = useParams();

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!mount) {
    return null;
  }

  return (
    <div className="flex max-w-[355px] flex-col items-center gap-[120px] md:max-w-[740px] xl:max-w-[1200px]">
      <div>
        <h1 className="mb-[90px] text-center text-[42px] font-semibold">
          <span className="block md:inline md:whitespace-nowrap">Mainnet</span>
          <span className="block md:inline md:whitespace-nowrap"> Deployment</span>
        </h1>
        <div className="flex flex-col items-center gap-[30px] md:flex-row md:gap-[60px] xl:gap-[30px]">
          <div className="h-[156px] w-[330px] xl:h-[156px]">
            <div className="flex animate-v-stacks-appear justify-center">
              <Image
                src={vStack3}
                alt="v-stack-3"
                className="w-[91px] translate-x-[100%] animate-v-stack-3 md:translate-x-[120%] md:animate-v-stack-3-800 xl:w-[91px]"
              />
              <Image
                src={vStack2}
                alt="v-stack-2"
                className="w-[122px] translate-x-[10px] md:translate-x-[25px] xl:w-[122px]"
              />
              <Image
                src={vStack1}
                alt="v-stack-1"
                className="w-[150px] -translate-x-[70%] animate-v-stack-1 md:-translate-x-[60%] md:animate-v-stack-1-800 xl:w-[150px]"
              />
            </div>
          </div>
          <div className="w-full">
            <h2 className="mb-[15px] text-center text-[30px] font-bold md:text-start">
              Tokamak
              <sup className="text-trh-red">OP</sup>
            </h2>
            <div className="w-full text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray md:text-start">
              A customized fork of the OP Stack that enables ERC20 tokens as the native currency for
              the L2 chain. This stack lets users deploy their chain with a custom L2 native token
              which can be used instead of ETH for transactions. It uses Ethereum as the settlement
              and data availability layer. The stack offers a built-in Blockscout explorer and the
              flexibility to integrate a mini bridge, enhancing its usability.
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="w-full">
          <div className="mb-[39px]">
            <h1 className="mb-[18px] text-center text-4xl font-semibold">
              Prepare your config file
            </h1>
            <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
              The following fields must be completed to customize your rollup chain configuration.
            </p>
            <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
              Once filled out, users can download the configuration file and use it during
              deployment.
            </p>
            <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
              Please refer&nbsp;
              <a
                href="https://docs.tokamak.network/home/~/changes/agYOWEeK7NUEeofss2bX/service-guide/rollup-hub/mainnet/deployment-configuration-parameters"
                target="_blank"
                rel="noreferrer noopener"
                className="text-tokamak-blue underline underline-offset-[4px]"
              >
                here
              </a>{' '}
              if you want to know more about each of these parameters.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[33px]">
          <FormMainnet />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <h1 className="mb-[18px] text-center text-4xl font-semibold">Deployment Guide</h1>
        <div>
          <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
            We aim to simplify the deployment of Tokamak OP Stack-based rollups on user-managed
          </p>
        </div>
        <div>
          <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
            cloud infrastructure(AWS) by minimizing the required configuration.
          </p>
        </div>
        <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
          You can access the deployment guide&nbsp;
          <a
            href="https://docs.tokamak.network/home/~/changes/agYOWEeK7NUEeofss2bX/service-guide/rollup-hub/mainnet/deploy-with-aws"
            target="_blank"
            rel="noreferrer noopener"
            className="text-tokamak-blue underline underline-offset-[4px]"
          >
            here
          </a>
          .
        </p>
      </div>
      <div className="flex w-full flex-col text-center">
        <h1 className="text-4xl font-semibold">Additional Features</h1>
        <div className="flex flex-col justify-center gap-[28px] py-[39px] md:flex-row">
          <div className="flex w-full flex-col items-center rounded-2xl px-[21px] py-[30px] light:bg-white light:ring-1 light:ring-[#E8EDF2] dark:bg-gradient-card">
            <div className="mb-[15px]">
              <h3 className="text-2xl font-[600px]">Mini Bridge</h3>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-[18px] font-medium leading-[27px] text-[#7E7E8F] dark:text-[#7D899A]">
                The mini bridge can be configured and integrated into the deployed L2 network. Its
                key functionality includes Deposit/Withdraw support for ETH or the native token. You
                can learn more about the mini bridge here. As the code is open source, operators and
                developers can extend its functionalities to suit their specific needs.
              </p>
            </div>
            <div className="flex gap-[30px]">
              {/* GitHub Icon */}
              <a
                href="https://github.com/tokamak-network/trh-op-bridge"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-[24px] flex cursor-pointer items-center gap-[6px]"
              >
                <Image
                  src={githubIconDark}
                  alt="github-icon"
                  width={15}
                  className="hidden dark:block"
                />
                <Image
                  src={githubIconLight}
                  alt="github-icon"
                  width={15}
                  className="block dark:hidden"
                />
                <div className="text-[16px] font-[500px]">GitHub</div>
              </a>

              {/* Docs Icon */}
              <a
                href="https://docs.tokamak.network/home/~/changes/agYOWEeK7NUEeofss2bX/service-guide/rollup-hub/mainnet/additional-features/mini-bridge"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-[24px] flex cursor-pointer items-center gap-[6px]"
              >
                <Image
                  src={docsIconDark}
                  alt="github-icon"
                  width={15}
                  className="hidden dark:block"
                />
                <Image
                  src={docsIconLight}
                  alt="github-icon"
                  width={15}
                  className="block dark:hidden"
                />
                <div className="text-[16px] font-[500px]">Docs</div>
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col items-center rounded-2xl px-[21px] py-[30px] light:bg-white light:ring-1 light:ring-[#E8EDF2] dark:bg-gradient-card">
            <div className="mb-[15px]">
              <h3 className="text-2xl font-[600px]">Earn Rewards for operating L2</h3>
            </div>
            <div className="flex flex-col">
              <p className="text-[18px] font-medium leading-[27px] text-[#7E7E8F] dark:text-[#7D899A]">
                L2 operators can generate additional revenue through TON seigniorage by attracting
                TON deposits to their network. Currently, this revenue opportunity is available only
                if the network uses TON as its native token. Learn more about registering your L2
                network with Tokamak Staking v2.5 here.
              </p>
            </div>
            <div className="mt-auto text-[18px] font-medium leading-[27px] text-[#7E7E8F] dark:text-[#7D899A]">
              Coming Soon
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div>
            <p className="text-center text-[16px] text-[#7E7E8F] dark:text-[#7D899A]">
              More features will be introduced over time based on needs and requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-[39px]">
        <div>
          <h1 className="mb-[18px] text-center text-4xl font-semibold">Need Help?</h1>
          <div>
            <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
              Our goal is to make your experience seamless, but sometimes things don’t go as
              planned.
            </p>
          </div>
          <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
            Reach out for assistance{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc6pHHABsnIZ2MvcEa57VCtSNTRXHAaFjBLQYf1LbiMB_81OA/viewform"
              target="_blank"
              rel="noreferrer noopener"
              className="text-tokamak-blue underline underline-offset-[4px]"
            >
              here
            </a>{' '}
            or visit our{' '}
            <a
              href="https://docs.tokamak.network/home/~/changes/agYOWEeK7NUEeofss2bX/service-guide/rollup-hub/troubleshooting"
              target="_blank"
              rel="noreferrer noopener"
              className="text-tokamak-blue underline underline-offset-[4px]"
            >
              troubleshooting section
            </a>
            .
          </p>
        </div>
        <div className="mb-[18px] text-center text-[21px] font-semibold">
          Frequently Asked Questions
        </div>
        <div className="mb-[60px] flex flex-col gap-[16px]">
          {fqaContent.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} links={item.links} />
          ))}
        </div>
      </div>
    </div>
  );
}
