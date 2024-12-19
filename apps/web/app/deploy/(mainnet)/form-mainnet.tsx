'use client';
import { FormInput } from '@/components/inputs/form-input';
import { useState, useEffect } from 'react';
import { handleForm } from './actions';
import { MainnetTemplate } from '@/lib/constants';
import { GeneralBtn } from '@/components/buttons/general-btn';

export function FormMainnet() {
  const [template, setTemplate] = useState<MainnetTemplate | null | undefined>(null); // 서버에서 반환된 템플릿 저장
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
      const outputFileName = 'config.json';
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
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-[30px] rounded-2xl px-5 pb-6 pt-5 light:ring-1 light:ring-[#E8EDF2] dark:bg-gradient-card">
        <div className="w-full">
          <FormInput
            type="text"
            label="Network Name"
            name="rollup-name"
            placeholder="Name your network"
            required={true}
            errors={errors?.fieldErrors?.rollupName}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="number"
            label="Chain ID"
            name="chain-id"
            placeholder="ex. 111551119090"
            required={true}
            errors={errors?.fieldErrors?.chainId}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            label="Native Token"
            name="native-token"
            placeholder="Name your rollup"
            required={true}
            errors={errors?.fieldErrors?.nativeToken}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            label="Admin Address"
            name="admin-address"
            placeholder="Enter admin address"
            required={true}
            errors={errors?.fieldErrors?.adminAddress}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            label="Sequencer Address"
            name="sequencer-address"
            placeholder="Enter sequencer address"
            required={true}
            errors={errors?.fieldErrors?.sequencerAddress}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            label="Batcher Address"
            name="batcher-address"
            placeholder="Enter batcher address"
            required={true}
            errors={errors?.fieldErrors?.batcherAddress}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            label="Proposer Address"
            name="proposer-address"
            placeholder="Enter proposer address"
            required={true}
            errors={errors?.fieldErrors?.proposerAddress}
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            label="Challenger Address"
            name="challenger-address"
            placeholder="Enter challenger address"
            required={true}
            errors={errors?.fieldErrors?.challengerAddress}
          />
        </div>
      </div>

      <GeneralBtn
        text={isSubmitting ? 'Submitting...' : 'Generate and download config file'}
        isDisabled={isSubmitting}
        styleType="primary"
        size="2xl"
      />
    </form>
  );
}