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
  wallet,
}: Readonly<{
  children: React.ReactNode;
  wallet: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Web3Providers>
          <div>
            <GlobalNav />
            <div className="flex-1 overflow-auto">
              {children}
              {wallet}
            </div>
            <Footer />
          </div>
        </Web3Providers>
      </body>
    </html>
  );
}
