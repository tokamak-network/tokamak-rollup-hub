import { DevResourceCard } from '@/components/cards/dev-resource-card';
import { HorisonStack, VetrticalStack } from './shape-stack-animation';
import { devResources } from '@/lib/constants';

export default function Deploy() {
  return (
    <div className="flex max-w-[355px] flex-col items-center md:max-w-[740px] xl:max-w-[1200px]">
      <h1 className="mb-[39px] text-4xl font-semibold">Deploy</h1>
      <div className="flex w-full flex-col items-center justify-center gap-[30px] md:flex-row">
        <div className="md:w-1/2">
          <div className="h-[200px] xl:h-[300px]">
            <VetrticalStack />
          </div>
          <DevResourceCard devResourceProps={devResources[0]} />
        </div>
        <div className="md:w-1/2">
          <div className="h-[200px] xl:h-[300px]">
            <HorisonStack />
          </div>
          <DevResourceCard devResourceProps={devResources[1]} />
        </div>
      </div>
    </div>
  );
}
