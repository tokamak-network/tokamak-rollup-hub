import type { Metadata } from 'next';
import '../styles/globals.css';
import GlobalNav from '@/components/navigation/global-nav';

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
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
