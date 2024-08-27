'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export function ChangeNetworkToThanos() {
  const [appear, setAppear] = useState(true);

  useEffect(() => {
    setTimeout(() => setAppear(false), 5000);
  }, []);

  return (
    <div
      className={clsx(
        {
          hidden: !appear,
          'inline-block': appear,
        },
        'absolute -left-1/2 top-full z-50 mt-6 animate-bounce',
      )}
    >
      <div className="rounded-[3px] bg-[#13131A] p-2 text-[12px] ring-[1px] ring-[#4B5563]">
        <p className="text-center">Please connect to Thanos</p>
        <p>
          <span className="text-tokamak-blue">mainnet & testnet</span> to use this service.
        </p>
      </div>
      <div className="absolute bottom-[calc(100%-6px)] left-[calc(50%-4px)] -z-10 w-2">
        <div className="h-2 origin-right rotate-45 transform rounded-sm bg-[#4B5563]"></div>
      </div>
    </div>
  );
}
