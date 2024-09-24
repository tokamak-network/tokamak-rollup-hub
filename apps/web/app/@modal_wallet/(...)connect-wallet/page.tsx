import WalletList from '@/app/connect-wallet/wallet-list';
import Modal from '@/components/modal';

export default function ModalConnectWallet() {
  return (
    <>
      <Modal>
        <div className="flex max-w-96 rounded-xl bg-black p-6 ring-1 ring-[#232429]">
          <WalletList />
        </div>
      </Modal>
    </>
  );
}
