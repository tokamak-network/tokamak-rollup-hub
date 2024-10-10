'use client';
import { GeneralBtn } from '@/components/buttons/general-btn';
import { FormInput } from '@/components/inputs/form-input';
import { handleForm } from './actions';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

interface FormDevnetProps {
  address: `0x${string}` | undefined;
}

export function FormDevnet({ address }: FormDevnetProps) {
  const [state, dispatch] = useFormState(handleForm, null);

  useEffect(() => {
    if (typeof window !== 'undefined' && state?.success) {
      localStorage.setItem('template', JSON.stringify(state.template));
      redirect('/deploy/devnet');
    }
  }, [state]);

  return (
    <form action={dispatch} className="flex flex-col items-center">
      <div className="mb-[30px] flex w-full flex-col gap-[30px] rounded-2xl px-5 pb-6 pt-5 light:ring-1 light:ring-[#E8EDF2] dark:bg-gradient-card md:flex-row">
        <div className="w-full">
          <FormInput
            type="text"
            label="Rollup Name"
            name="rollup-name"
            placeholder="Name your rollup"
            required={true}
            errors={state?.errors?.fieldErrors.rollupName}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="number"
            label="Chain ID"
            name="chain-id"
            placeholder="ex. 111551119090"
            required={true}
            errors={state?.errors?.fieldErrors.chainId}
          />
        </div>
      </div>
      <div className="mb-[39px] flex w-full flex-col gap-[30px] rounded-2xl p-5 light:ring-1 light:ring-[#E8EDF2] dark:bg-gradient-card xl:flex-row">
        <div className="w-full xl:w-1/2">
          <h3 className="mb-3 text-center text-xl font-semibold xl:text-left">Address Set-up</h3>
          <p className="text-center font-medium text-[#7E7E8F] dark:text-trh-gray xl:text-left">
            Please list the main addresses that will be used in your rollup.{' '}
            <span className="hidden xl:inline">
              The required ones are automatically populated and can be edited.
            </span>
          </p>
          <p className="text-center font-medium text-[#7E7E8F] dark:text-trh-gray xl:hidden">
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
                address={address}
                errors={state?.errors?.fieldErrors.adminAddress}
              />
            </div>
            <div className="w-full">
              <FormInput
                type="text"
                label="Sequencer"
                name="sequencer-address"
                placeholder="Input your sequencer address"
                required={true}
                address={address}
                errors={state?.errors?.fieldErrors.sequencerAddress}
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
                address={address}
                errors={state?.errors?.fieldErrors.batcherAddress}
              />
            </div>
            <div className="w-full">
              <FormInput
                type="text"
                label="Proposer"
                name="proposer-address"
                placeholder="Input your proposer address"
                required={true}
                address={address}
                errors={state?.errors?.fieldErrors.proposerAddress}
              />
            </div>
          </div>
        </div>
      </div>
      <GeneralBtn isDisabled={false} text="Deploy Rollup" styleType="primary" size="2xl" />
    </form>
  );
}
