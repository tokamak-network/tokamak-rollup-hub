import Modal from '@/components/modal';
import WalletList from '@/components/wallets/wallet-list';

export default function ModalConnectWallet() {
  return (
    <>
      <Modal>
        <div className="flex w-full max-w-96 rounded-xl bg-black p-6 ring-1 ring-[#232429]">
          <WalletList />
        </div>
      </Modal>
    </>
  );
}
