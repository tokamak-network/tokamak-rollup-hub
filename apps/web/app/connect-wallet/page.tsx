import WalletList from './wallet-list';

export default function ConnectWallet() {
  return (
    <div className="flex min-h-[calc(100vh-78px)] w-full items-center justify-center">
      <WalletList />
    </div>
  );
}
