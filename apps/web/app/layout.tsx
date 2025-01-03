import type { Metadata } from 'next';
import '../styles/globals.css';
import GlobalNav from '@/components/navigation/global-nav';
import Footer from '@/components/footers/footer';
import { Web3Providers } from './web3provider';
import ThemeProvider from './theme-provider';
import TokamakGlobalNav from '@/components/navigation/tokamak-global-nav';

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
      <body className="bg-[#FAFBFC] text-[#1C1C1C] *:transition-colors dark:bg-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <Web3Providers>
            <GlobalNav />
            <div className="min-h-[calc(100vh-78px)]">
              {children}
              {modal_wallet}
            </div>
            <Footer />
          </Web3Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
