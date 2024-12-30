import { Suspense } from 'react';

export default function DeployMainnetLayout({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>;
}
