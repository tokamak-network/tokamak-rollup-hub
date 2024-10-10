'use client';
import BgMDark from '../../../public/background/bg-mobile-discover-zk-dark.png';
import BgDDark from '../../../public/background/bg-desktop-discover-zk-dark.png';
import BgTDark from '../../../public/background/bg-tablet-discover-zk-dark.png';
import BgMLight from '../../../public/background/bg-mobile-discover-zk-light.png';
import BgDLight from '../../../public/background/bg-desktop-discover-zk-light.png';
import BgTLight from '../../../public/background/bg-tablet-discover-zk-light.png';
import { getImageProps } from 'next/image';
import { useTheme } from 'next-themes';
import ComingSoon from '@/components/covers/coming-soon';

export default function TokamakZK() {
  const common = { alt: 'background image' };
  const {
    props: { srcSet: desktopDark, ...rest },
  } = getImageProps({
    ...common,
    width: 1000,
    height: 770,
    src: BgDDark,
  });

  const {
    props: { srcSet: tabletDark },
  } = getImageProps({
    ...common,
    width: 740,
    height: 800,
    src: BgTDark,
  });

  const {
    props: { srcSet: mobileDark },
  } = getImageProps({
    ...common,
    width: 355,
    height: 517,
    src: BgMDark,
  });

  const {
    props: { srcSet: desktopLight },
  } = getImageProps({
    ...common,
    width: 1000,
    height: 770,
    src: BgDLight,
  });

  const {
    props: { srcSet: tabletLight },
  } = getImageProps({
    ...common,
    width: 740,
    height: 800,
    src: BgTLight,
  });

  const {
    props: { srcSet: mobileLight },
  } = getImageProps({
    ...common,
    width: 355,
    height: 517,
    src: BgMLight,
  });
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="flex w-full max-w-[355px] flex-col items-center gap-[39px] py-[60px] md:max-w-[740px] xl:max-w-[1200px]">
      <h1 className="text-4xl font-semibold">
        Tokamak <sup className="text-trh-green">ZK+</sup>
      </h1>
      <div className="relative max-h-[516px] w-full overflow-hidden md:max-h-max">
        <div className="absolute left-0 top-0 z-[10] flex h-full w-full items-center justify-center bg-[FAFBFC] bg-opacity-65 backdrop-blur-[5px] dark:bg-black dark:bg-opacity-65">
          <ComingSoon text="Details about the ZK Stack" />
        </div>
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={currentTheme === 'dark' ? desktopDark : desktopLight}
          />
          <source
            media="(min-width: 800px)"
            srcSet={currentTheme === 'dark' ? tabletDark : tabletLight}
          />
          <source
            media="(min-width: 360px)"
            srcSet={currentTheme === 'dark' ? mobileDark : mobileLight}
          />
          <img alt="" {...rest} className="w-full" />
        </picture>
      </div>
    </div>
  );
}
