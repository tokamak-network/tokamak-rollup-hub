import Image from 'next/image';
import VisualLanding from '../../public/visual-landing.svg';
import GeneralBtn from '@/components/buttons/general-btn';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className="w-full 2xl:flex 2xl:justify-center">
      <div className="flex h-[860px] flex-col items-center gap-[30px] md:relative md:flex-row md:items-start md:justify-center xl:h-[560px] xl:items-center 2xl:static 2xl:min-w-[1900px] 2xl:justify-between">
        <div className="z-20 flex w-fit flex-col items-center gap-[30px] md:absolute md:left-0 md:items-start 2xl:static">
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
                On-Demand Rollup
              </p>
              <p className="text-center font-medium text-trh-gray md:text-left md:text-[20px]">
                Instantly create a fully customizable L2 rollup <br className="inline md:hidden" />
                that is secure and fast.
              </p>
            </div>
          </div>
          <div className="flex gap-[15px]">
            <Link href="/deploy">
              <GeneralBtn text="Deploy Now" style="primary" size="landingPage" arrow="right" />
            </Link>
            <GeneralBtn text="Documentation" style="secondary" size="landingPage" />
          </div>
        </div>
        <Image
          src={VisualLanding}
          alt="visual"
          className="bottom-0 z-10 w-[332px] md:absolute md:right-0 md:w-auto xl:top-0 2xl:static"
        />
      </div>
    </div>
  );
}
