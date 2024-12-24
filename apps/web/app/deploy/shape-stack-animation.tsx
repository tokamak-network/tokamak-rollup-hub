import Image from 'next/image';
import vStack1 from '../../public/vertical-shape-stack-1.svg';
import vStack2 from '../../public/vertical-shape-stack-2.svg';
import vStack3 from '../../public/vertical-shape-stack-3.svg';
import hStack1 from '../../public/horizon-shape-stack-1.svg';
import hStack2 from '../../public/horizon-shape-stack-2.svg';
import hStack3 from '../../public/horizon-shape-stack-3.svg';

export function VerticalStack() {
  return (
    <div className="flex animate-v-stacks-appear justify-center">
      <Image
        src={vStack3}
        alt="v-stack-3"
        className="w-[117px] translate-x-[100%] animate-v-stack-3 md:translate-x-[120%] md:animate-v-stack-3-800 xl:w-[148px]"
      />
      <Image
        src={vStack2}
        alt="v-stack-2"
        className="w-[155px] translate-x-[10px] md:translate-x-[40px] xl:w-[197px]"
      />
      <Image
        src={vStack1}
        alt="v-stack-1"
        className="w-[190px] -translate-x-[70%] animate-v-stack-1 md:-translate-x-[60%] md:animate-v-stack-1-800 xl:w-[242px]"
      />
    </div>
  );
}

export function HorisonStack() {
  return (
    <div className="flex animate-h-stacks-appear flex-col items-center">
      <Image
        src={hStack3}
        alt="h-stack-3"
        className="w-[165px] -translate-x-[45%] translate-y-[45%] animate-h-stack-3 xl:w-[210px]"
      />
      <Image
        src={hStack2}
        alt="h-stack-2"
        className="w-[228px] -translate-x-[20%] -translate-y-[25%] animate-h-stack-2 opacity-60 xl:w-[290px]"
      />
      <Image
        src={hStack1}
        alt="h-stack-1"
        className="w-[269px] -translate-x-[15%] -translate-y-[95%] xl:w-[342px]"
      />
    </div>
  );
}
