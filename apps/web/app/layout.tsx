import type { Metadata } from 'next';
import '../styles/globals.css';
import GlobalNav from '@/components/navigation/global-nav';
import Footer from '@/components/footer';
import { Web3Providers } from './web3provider';

export const metadata: Metadata = {
  title: 'Tokamak Rollup Hub',
  description: 'Hello, World! This is Tokamak Rollup Hub',
};

export default function RootLayout({
  children,
  modal_wallet,
}: Readonly<{
  children: React.ReactNode;
  modal_wallet: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Web3Providers>
          <GlobalNav />
          <div>
            {children}
            {modal_wallet}
          </div>
          <Footer />
        </Web3Providers>
      </body>
    </html>
  );
}
