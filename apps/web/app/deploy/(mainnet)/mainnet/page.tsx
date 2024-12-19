'use client';
import { useEffect, useState } from 'react';
import { FormMainnet } from '../form-mainnet';

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
    <div className="max-w-[355px] items-center py-[60px] md:max-w-[740px] xl:max-w-[1200px] xl:flex-row">
      <h1 className="mb-[39px] text-center text-4xl font-semibold">Mainnet Deployment Guide</h1>
      <div className="flex flex-col xl:flex-row">
        <div className="flex w-full flex-col gap-[33px] p-5">
          <FormMainnet />
        </div>
      </div>
    </div>
  );
}
