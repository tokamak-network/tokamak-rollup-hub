'use client';

export function ChangeNetworkToThanos() {
  return (
    <div className="absolute -left-[104px] top-[55px] z-50 animate-bounce">
      <div className="w-[240px] rounded-[3px] bg-white p-2 text-[12px] ring-[1px] ring-[#E8EDF2] dark:bg-[#13131A] dark:ring-[#4B5563]">
        <p className="text-center">Wallet should be either connected</p>
        <p>
          <span className="text-tokamak-blue">
            Ethereum mainnet <span className="text-[#1C1C1C] dark:text-white">or</span> Thanos
            testnet.
          </span>
        </p>
      </div>
      <div className="absolute bottom-[calc(100%-6px)] left-[calc(50%-4.5px)] -z-10 w-2">
        <div className="h-2 origin-right rotate-45 transform rounded-sm bg-[#E8EDF2] [clip-path:polygon(0_0,100%_0,0_100%)] dark:bg-[#4B5563]"></div>
      </div>
    </div>
  );
}
