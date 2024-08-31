import GeneralBtn from '@/components/buttons/general-btn';
import { FormInput } from '@/components/inputs/form-input';
import Link from 'next/link';

export function FormDevnet() {
  return (
    <form className="flex flex-col items-center">
      <div className="mb-[30px] flex w-full flex-col gap-[30px] rounded-2xl bg-gradient-card p-5 md:flex-row">
        <div className="w-full">
          <FormInput
            type="text"
            label="Rollup Name"
            name="rollup-name"
            placeholder="Sample Name"
            required={true}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="number"
            label="Chain ID"
            name="chain-id"
            placeholder="ex. 111551119090"
            required={true}
          />
          <p className="mt-[9px] text-[13px] text-trh-gray">
            Please enter the value you registered in{' '}
            <Link href="#">
              <span className="text-tokamak-blue underline underline-offset-1">Chainlist</span>
            </Link>{' '}
            beforehand
          </p>
        </div>
      </div>
      <div className="mb-[39px] flex w-full flex-col gap-[30px] rounded-2xl bg-gradient-card p-5 xl:flex-row">
        <div className="w-full xl:w-1/2">
          <h3 className="mb-3 text-center text-xl font-semibold xl:text-left">Address Set-up</h3>
          <p className="text-center font-medium text-trh-gray xl:text-left">
            Please list the main addresses that will be used in your rollup.{' '}
            <span className="hidden xl:inline">
              The required ones are automatically populated and can be edited.
            </span>
          </p>
          <p className="text-center font-medium text-trh-gray xl:hidden">
            The required ones are automatically populated and can be edited.
          </p>
        </div>
        <div className="flex w-full flex-col gap-[30px]">
          <div className="flex w-full flex-col gap-[30px] md:flex-row">
            <div className="w-full">
              <FormInput
                type="text"
                label="Admin"
                name="admin-address"
                placeholder="Input your admin address"
                required={true}
              />
            </div>
            <div className="w-full">
              <FormInput
                type="text"
                label="Sequencer"
                name="sequencer-address"
                placeholder="Input your sequencer address"
                required={true}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[30px] md:flex-row">
            <div className="w-full">
              <FormInput
                type="text"
                label="Batcher"
                name="batcher-address"
                placeholder="Input your batcher address"
                required={true}
              />
            </div>
            <div className="w-full">
              <FormInput
                type="text"
                label="Proposer"
                name="proposer-address"
                placeholder="Input your proposer address"
                required={true}
              />
            </div>
          </div>
        </div>
      </div>
      <GeneralBtn text="Deploy Rollup" style="primary" size="long" />
    </form>
  );
}
