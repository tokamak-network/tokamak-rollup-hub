import { Suspense } from 'react';

export default function DeployDevnetLayout({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>;
}
