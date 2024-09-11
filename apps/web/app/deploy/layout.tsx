export default function DeployLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-78px)] w-full justify-center pt-[80px]">{children}</div>
  );
}
