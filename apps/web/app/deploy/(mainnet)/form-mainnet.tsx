'use client';
import { FormInput } from '@/components/inputs/form-input';
import { useState, useEffect } from 'react';
import { handleForm } from './actions';
import { MainnetTemplate } from '@/lib/constants';
import DownloadIcon from '@/public/icon-download.svg';
import { IconBtn } from '@/components/buttons/icon-btn';
import { Tooltip } from '@/components/tooltip/tooltip';

export function FormMainnet() {
  const [template, setTemplate] = useState<MainnetTemplate | null | undefined>(null);
  const [errors, setErrors] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await handleForm(null, formData);

      if (response.success) {
        setTemplate(response.template);
        setErrors(null);
      } else {
        setTemplate(null);
        setErrors(response.errors);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setErrors({ general: 'Unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (template) {
      const json = JSON.stringify(template, null, 2);
      const outputFileName = 'deploy-config.json';
      const link = document.createElement('a');
      const blob = new Blob([json], { type: 'application/json' });
      const href = URL.createObjectURL(blob);
      link.href = href;
      link.download = outputFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [template]);

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center">
      <div className="mb-[39px] grid w-full grid-cols-1 gap-[30px] rounded-2xl px-5 pb-6 pt-5 light:bg-white light:ring-1 light:ring-[#E8EDF2] dark:bg-gradient-card md:grid-cols-2 xl:grid-cols-3">
        <div className="relative w-full">
          <div className="absolute left-[109px] top-[5.3px] md:left-[113px] md:top-[5.3px]">
            <Tooltip
              content={
                <div className="flex min-w-[220px] flex-col items-center">
                  <div>Rollup Name:</div>
                  <div className="flex">2+ letters, alphabets only, no spaces.</div>
                </div>
              }
              position="bottom"
            />
          </div>
          <FormInput
            type="text"
            label="Network Name"
            name="rollup-name"
            placeholder="Name your network"
            required={true}
            errors={errors?.fieldErrors?.rollupName}
          />
        </div>
        <div className="relative w-full">
          <div className="absolute left-[65px] top-[5px] md:left-[65px] md:top-[5px]">
            <Tooltip
              content={
                <div className="flex min-w-[150px] flex-col items-center">
                  <div>Get a Chain ID</div>
                  <div className="flex">
                    <p>in advance from&nbsp;</p>
                    <a
                      href="https://chainlist.org"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-tokamak-blue underline underline-offset-4"
                    >
                      ChainList
                    </a>
                  </div>
                </div>
              }
              position="bottom"
            />
          </div>
          <FormInput
            type="number"
            label="Chain ID"
            name="chain-id"
            placeholder="ID"
            required={true}
            errors={errors?.fieldErrors?.chainId}
          />
        </div>
        <div className="relative w-full">
          <div className="absolute left-[96px] top-[5.3px] md:left-[98px] md:top-[5.3px]">
            <Tooltip
              content={
                <div className="flex min-w-[210px] flex-col items-center">
                  <div className="text-center">
                    Please provide the token address of the ERC20 token. Refer{' '}
                    <a
                      href="https://docs.tokamak.network/home/~/changes/agYOWEeK7NUEeofss2bX/service-guide/rollup-hub/mainnet/deployment-configuration-parameters?r=Bh1VAMnTuMd0VgUBzoKr"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-tokamak-blue underline underline-offset-[3px]"
                    >
                      here
                    </a>{' '}
                    for additional information.
                  </div>
                </div>
              }
              position="bottom"
            />
          </div>
          <FormInput
            type="text"
            label="Native Token"
            name="native-token"
            placeholder="0x..."
            required={true}
            errors={errors?.fieldErrors?.nativeToken}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            label="Admin Address"
            name="admin-address"
            placeholder="0x..."
            required={true}
            errors={errors?.fieldErrors?.adminAddress}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            label="Sequencer Address"
            name="sequencer-address"
            placeholder="0x..."
            required={true}
            errors={errors?.fieldErrors?.sequencerAddress}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            label="Batcher Address"
            name="batcher-address"
            placeholder="0x..."
            required={true}
            errors={errors?.fieldErrors?.batcherAddress}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            label="Proposer Address"
            name="proposer-address"
            placeholder="0x..."
            required={true}
            errors={errors?.fieldErrors?.proposerAddress}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            label="Challenger Address"
            name="challenger-address"
            placeholder="0x..."
            required={true}
            errors={errors?.fieldErrors?.challengerAddress}
          />
        </div>
      </div>

      <IconBtn
        text="Generate and download config file"
        isDisabled={false}
        isLoading={isSubmitting}
        styleType="primary"
        size="2xl"
        icon={DownloadIcon}
      />
    </form>
  );
}
