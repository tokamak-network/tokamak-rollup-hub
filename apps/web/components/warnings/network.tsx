'use client';

export function ChangeNetworkToThanos() {
  return (
    <div className="absolute -left-1/2 top-full z-50 mt-6 animate-bounce">
      <div className="rounded-[3px] bg-white p-2 text-[12px] ring-[1px] ring-[#E8EDF2] dark:bg-[#13131A] dark:ring-[#4B5563]">
        <p className="text-center">
          Please connect to <span className="text-tokamak-blue">Thanos</span>
        </p>
        <p>
          <span className="text-tokamak-blue">mainnet & testnet</span> to use this service.
        </p>
      </div>
      <div className="absolute bottom-[calc(100%-6px)] left-[calc(50%-4px)] -z-10 w-2">
        <div className="h-2 origin-right rotate-45 transform rounded-sm bg-[#E8EDF2] [clip-path:polygon(0_0,100%_0,0_100%)] dark:bg-[#4B5563]"></div>
      </div>
    </div>
  );
}
