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
        <h1 className="mb-[90px] text-center text-4xl font-semibold">
          <span className="block md:inline md:whitespace-nowrap">Devnet</span>
          <span className="block md:inline md:whitespace-nowrap"> Deployment</span>
          <span className="block md:inline md:whitespace-nowrap"> Guide</span>
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
            <div className="w-full text-center text-[16px] text-[#7E7E8F] dark:text-trh-gray md:text-start">
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
            href="https://docs.tokamak.network/home/service-guide/rollup-hub"
            target="_blank"
            rel="noreferrer noopener"
            className="text-tokamak-blue underline"
          >
            here
          </a>
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
              <p className="text-[18px] font-medium leading-[27px] text-[#7E7E8F] dark:text-trh-gray">
                The mini bridge can be configured and integrated into the deployed L2 network. Its
                key functionality includes Deposit/Withdraw support for ETH or the native token. You
                can learn more about the mini bridge here. As the code is open source, operators and
                developers can extend its functionalities to suit their specific needs.
              </p>
            </div>
            <div className="flex gap-[30px]">
              {/* GitHub Icon */}
              <a
                href="https://chainlist.org"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-[24px] flex cursor-pointer items-center gap-[6px]"
              >
                <div className="hidden dark:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M14.5 7.49763C14.4995 6.21192 14.1449 4.9512 13.4751 3.85375C12.8052 2.7563 11.8461 1.86451 10.7029 1.27622C9.55969 0.687937 8.27653 0.425884 6.99418 0.518791C5.71183 0.611698 4.47984 1.05598 3.43336 1.80291C2.38687 2.54985 1.5663 3.57057 1.06169 4.75311C0.557068 5.93565 0.387886 7.23434 0.572698 8.50669C0.75751 9.77905 1.28918 10.9759 2.10938 11.966C2.92958 12.9561 4.00662 13.7012 5.22236 14.1196C5.32066 14.069 5.40497 13.995 5.46782 13.9041C5.53068 13.8131 5.57016 13.7081 5.58273 13.5983C5.58273 13.2133 5.57425 12.2231 5.57425 12.2231C5.33003 12.259 5.08343 12.2762 4.83659 12.2747C4.48804 12.2967 4.14199 12.2029 3.85222 12.008C3.56246 11.813 3.34521 11.5278 3.23424 11.1967C3.08156 10.808 2.80498 10.4805 2.44732 10.265C2.26637 10.148 2.22478 10.0101 2.43422 9.97162C3.40133 9.79067 3.64851 11.0619 4.29453 11.2652C4.74106 11.4043 5.22401 11.3657 5.64277 11.1574C5.70262 10.7958 5.90231 10.4722 6.19872 10.2565C4.55555 10.1025 3.58074 9.53195 3.07717 8.61951L3.02326 8.51788L2.89622 8.22835L2.85849 8.12442C2.69508 7.61219 2.61704 7.07655 2.62749 6.53899C2.61174 6.16929 2.67193 5.80029 2.80437 5.45477C2.9368 5.10925 3.13866 4.79454 3.39749 4.53009C3.18604 3.86586 3.22941 3.14672 3.51915 2.51271C3.51915 2.51271 4.23061 2.36565 5.57425 3.32275C6.74784 3.00932 7.98002 2.9858 9.16471 3.25421C9.72835 2.88308 10.7609 2.3564 11.1767 2.50424C11.4546 3.08519 11.5073 3.74855 11.3246 4.36608C11.9122 4.99278 12.2281 5.82653 12.2031 6.68529C12.2014 7.17077 12.1409 7.65424 12.0229 8.12517L11.9629 8.33076C11.9629 8.33076 11.9282 8.42779 11.8905 8.52096L11.8458 8.62259C11.3584 9.68748 10.359 10.0856 8.74431 10.2504C9.2679 10.5784 9.41727 10.9895 9.41727 12.0983C9.41727 13.2071 9.40266 13.3604 9.40574 13.6168C9.42103 13.7228 9.46016 13.8239 9.52017 13.9126C9.58019 14.0013 9.65952 14.0752 9.75222 14.1288C11.1367 13.6572 12.3389 12.7643 13.1903 11.5751C14.0417 10.386 14.4997 8.96018 14.5 7.49763Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="block dark:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M14.5 7.49714C14.4995 6.21143 14.1449 4.95072 13.4751 3.85326C12.8052 2.75581 11.8461 1.86402 10.7029 1.27573C9.55969 0.687449 8.27653 0.425396 6.99418 0.518303C5.71183 0.61121 4.47984 1.05549 3.43336 1.80243C2.38687 2.54936 1.5663 3.57008 1.06169 4.75262C0.557068 5.93516 0.387886 7.23385 0.572698 8.5062C0.75751 9.77856 1.28918 10.9754 2.10938 11.9655C2.92958 12.9556 4.00662 13.7007 5.22236 14.1191C5.32066 14.0685 5.40497 13.9945 5.46782 13.9036C5.53068 13.8126 5.57016 13.7076 5.58273 13.5978C5.58273 13.2128 5.57425 12.2226 5.57425 12.2226C5.33003 12.2585 5.08343 12.2757 4.83659 12.2742C4.48804 12.2962 4.14199 12.2024 3.85222 12.0075C3.56246 11.8125 3.34521 11.5273 3.23424 11.1962C3.08156 10.8075 2.80498 10.4801 2.44732 10.2645C2.26637 10.1475 2.22478 10.0096 2.43422 9.97113C3.40133 9.79018 3.64851 11.0614 4.29453 11.2647C4.74106 11.4038 5.22401 11.3652 5.64277 11.1569C5.70262 10.7953 5.90231 10.4717 6.19872 10.256C4.55555 10.102 3.58074 9.53146 3.07717 8.61902L3.02326 8.51739L2.89622 8.22787L2.85849 8.12393C2.69508 7.6117 2.61704 7.07607 2.62749 6.5385C2.61174 6.16881 2.67193 5.7998 2.80437 5.45428C2.9368 5.10876 3.13866 4.79406 3.39749 4.5296C3.18604 3.86538 3.22941 3.14623 3.51915 2.51223C3.51915 2.51223 4.23061 2.36516 5.57425 3.32226C6.74784 3.00883 7.98002 2.98531 9.16471 3.25373C9.72835 2.88259 10.7609 2.35592 11.1767 2.50376C11.4546 3.0847 11.5073 3.74807 11.3246 4.36559C11.9122 4.99229 12.2281 5.82604 12.2031 6.6848C12.2014 7.17028 12.1409 7.65375 12.0229 8.12468L11.9629 8.33027C11.9629 8.33027 11.9282 8.4273 11.8905 8.52047L11.8458 8.6221C11.3584 9.687 10.359 10.0851 8.74431 10.2499C9.2679 10.5779 9.41727 10.9891 9.41727 12.0978C9.41727 13.2066 9.40266 13.3599 9.40574 13.6163C9.42103 13.7223 9.46016 13.8234 9.52017 13.9121C9.58019 14.0008 9.65952 14.0747 9.75222 14.1283C11.1367 13.6568 12.3389 12.7638 13.1903 11.5747C14.0417 10.3855 14.4997 8.95969 14.5 7.49714Z"
                      fill="#07070C"
                    />
                  </svg>
                </div>
                <div className="text-[16px] font-[500px]">GitHub</div>
              </a>

              {/* Docs Icon */}
              <a
                href="https://chainlist.org"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-[24px] flex cursor-pointer items-center gap-[6px]"
              >
                <div className="hidden dark:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M13.864 6.8635V10.6817C13.864 13.2271 13.2276 13.8635 10.6822 13.8635H4.31854C1.77308 13.8635 1.13672 13.2271 1.13672 10.6817V4.31805C1.13672 1.77259 1.77308 1.13623 4.31854 1.13623H5.27308C6.22763 1.13623 6.43763 1.41623 6.80035 1.89987L7.7549 3.17259C7.99672 3.49078 8.13672 3.68168 8.77308 3.68168H10.6822C13.2276 3.68168 13.864 4.31805 13.864 6.8635Z"
                      stroke="white"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M4.9541 1.13623H10.6814C11.9541 1.13623 12.5905 1.77259 12.5905 3.04532V3.9235"
                      stroke="white"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="block dark:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M13.864 6.86399V10.6822C13.864 13.2276 13.2276 13.864 10.6822 13.864H4.31854C1.77308 13.864 1.13672 13.2276 1.13672 10.6822V4.31854C1.13672 1.77308 1.77308 1.13672 4.31854 1.13672H5.27308C6.22763 1.13672 6.43763 1.41672 6.80035 1.90036L7.7549 3.17308C7.99672 3.49126 8.13672 3.68217 8.77308 3.68217H10.6822C13.2276 3.68217 13.864 4.31854 13.864 6.86399Z"
                      stroke="#07070C"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M4.9541 1.13672H10.6814C11.9541 1.13672 12.5905 1.77308 12.5905 3.04581V3.92399"
                      stroke="#07070C"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[16px] font-[500px]">Docs</div>
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between rounded-2xl px-[21px] py-[30px] light:bg-white light:ring-1 light:ring-[#E8EDF2] dark:bg-gradient-card">
            <div className="mb-[15px]">
              <h3 className="text-2xl font-[600px]">Earn Rewards for operating L2</h3>
            </div>
            <div className="flex flex-col">
              <p className="text-[18px] font-medium leading-[27px] text-[#7E7E8F] dark:text-trh-gray">
                L2 operators can generate additional revenue through TON seigniorage by attracting
                TON deposits to their network. Currently, this revenue opportunity is available only
                if the network uses TON as its native token. Learn more about registering your L2
                network with Tokamak Staking v2.5 here.
              </p>
            </div>
            <div className="mt-[24px] text-[18px] font-medium leading-[27px] text-[#7E7E8F] dark:text-trh-gray">
              Coming Soon
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <h1 className="text-center text-[21px] font-semibold text-[#7E7E8F]">Coming Soon</h1>
          <div>
            <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
              Additional features will be introduced over time based on needs and requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-[39px]">
        <div>
          <h1 className="mb-[18px] text-center text-4xl font-semibold">If you need more help?</h1>
          <div>
            <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
              Our goal is to make your experience seamless, but sometimes things don’t go as
              planned.
            </p>
          </div>
          <p className="text-center text-[18px] text-[#7E7E8F] dark:text-trh-gray">
            Explore &nbsp;
            <a
              href="https://docs.tokamak.network/home/service-guide/rollup-hub"
              target="_blank"
              rel="noreferrer noopener"
              className="text-tokamak-blue underline"
            >
              troubleshooting guide
            </a>
            &nbsp;to quickly resolve any issues.
          </p>
        </div>
        <div className="mb-[18px] text-center text-[21px] font-semibold">FAQ</div>
        <div className="mb-[60px] flex flex-col gap-[16px]">
          {fqaContent.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
}
