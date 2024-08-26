export function ChangeNetworkToThanos() {
  return (
    <div className="absolute z-50 top-full mt-6 -left-1/2 animate-bounce">
      <div className="bg-[#13131A] text-[12px] p-2 ring-[1px] ring-[#4B5563] rounded-[3px]">
        <p className="text-center">Please connect to Thanos</p>
        <p><span className="text-tokamak-blue">mainnet & testnet</span> to use this service.</p>
      </div>
      <div className="w-2 absolute left-[calc(50%-4px)] bottom-[calc(100%-6px)] -z-10">
        <div className="h-2 bg-[#4B5563] transform origin-right rounded-sm rotate-45">
        </div>
      </div>
    </div>
  )
}
