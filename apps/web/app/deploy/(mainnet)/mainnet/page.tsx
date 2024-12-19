'use client';
import { useEffect, useState } from 'react';
import { FormMainnet } from '../form-mainnet';
import Image from 'next/image';
import vStack1 from '@/public/vertical-shape-stack-1.svg';
import vStack2 from '@/public/vertical-shape-stack-2.svg';
import vStack3 from '@/public/vertical-shape-stack-3.svg';

// TODO: documents link
export default function DeployMainnetPage() {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  return (
    <div className="flex max-w-[355px] flex-col items-center gap-[120px] md:max-w-[740px] xl:max-w-[1200px]">
      <div>
        <h1 className="mb-[90px] text-center text-4xl font-semibold">Mainnet Deployment Guide</h1>
        <div className="flex gap-[30px]">
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
          <div>
            <h2 className="mb-[15px] text-[30px] font-bold">
              Tokamak
              <sup className="text-trh-red">OP</sup>
            </h2>
            <div className="flex flex-col">
              <div className="w-[870px] text-left text-[18px] text-[#7E7E8F] dark:text-trh-gray">
                <p>
                  customized fork of the OP Stack that enables ERC20 tokens as the native currency
                  for the L2 chain.
                </p>
              </div>
              <div className="w-[870px] text-left text-[18px] text-[#7E7E8F] dark:text-trh-gray">
                <p>
                  This stack lets users deploy their chain with a custom L2 native token which can
                  be used instead of ETH for
                </p>
              </div>
              <div className="w-[870px] text-left text-[18px] text-[#7E7E8F] dark:text-trh-gray">
                <p>
                  transactions. It uses Ethereum as the settlement and data availability layer. The
                  stack offers a built-in
                </p>
              </div>
              <div className="w-[870px] text-left text-[18px] text-[#7E7E8F] dark:text-trh-gray">
                <p>
                  Blockscout explorer and the flexibility to integrate a mini bridge, enhancing its
                  usability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full flex-col gap-[33px] p-5">
          <FormMainnet />
        </div>
      </div>
    </div>
  );
}
