import type { Metadata } from 'next';
import '../styles/globals.css';
import GlobalNav from '@/components/navigation/global-nav';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Tokamak Rollup Hub',
  description: 'Hello, World! This is Tokamak Rollup Hub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-screen flex-col">
          <GlobalNav />
          <div className="flex max-h-full max-w-full flex-grow flex-row overflow-auto">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
