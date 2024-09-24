import Image from 'next/image';
import VisualLanding from '../../public/visual-landing.svg';
import { GeneralBtn } from '@/components/buttons/general-btn';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className="min-h-[calc(100vh-78px-200px)] xl:flex xl:flex-col xl:justify-center">
      <div className="flex min-h-[720px] justify-center pt-[78px] md:min-h-[920px] md:justify-between md:pl-[45px] md:pr-0 xl:flex-col xl:items-center xl:justify-center xl:px-[30px]">
        <div className="flex max-w-[360px] flex-col items-center gap-[30px] py-[30px] md:relative md:max-h-[920px] md:w-full md:max-w-[1620px] md:flex-row md:items-start xl:h-[552px] xl:items-center xl:py-0">
          <div className="z-20 flex w-fit flex-col items-center gap-[30px] md:items-start">
            <div className="flex flex-col items-center justify-start gap-3 text-balance md:items-start">
              <div className="flex justify-center md:justify-start">
                <p className="text-center text-sm font-semibold text-tokamak-blue md:text-[21px]">
                  L2 On-Demand Rollup
                </p>
              </div>
              <div className="flex flex-col justify-start gap-[18px]">
                <p className="text-center text-[35px] font-extrabold leading-[40px] md:text-left md:text-[92px] md:font-bold md:leading-[90px]">
                  Deploy your
                  <br />
                  On-Demand
                  <br className="hidden md:inline xl:hidden" />
                  <span className="inline md:hidden xl:inline">&nbsp;</span>Rollup
                </p>
                <p className="text-center font-medium text-trh-gray md:text-left md:text-[20px]">
                  Instantly create a fully customizable L2 rollup{' '}
                  <br className="inline xl:hidden" />
                  that is secure and fast.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px]">
              <Link href="/deploy">
                <GeneralBtn
                  isDisabled={false}
                  text="Deploy Now"
                  styleType="primary"
                  size="landingPage"
                  arrow="right"
                />
              </Link>
              <GeneralBtn
                isDisabled={false}
                text="Documentation"
                styleType="secondary"
                size="landingPage"
              />
            </div>
          </div>
          <div className="w-full md:absolute md:bottom-0 md:right-0 md:w-auto">
            <Image src={VisualLanding} alt="visual" />
          </div>
        </div>
      </div>
    </div>
  );
}
