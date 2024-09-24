export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-hidden bg-black bg-opacity-75">
      {children}
    </div>
  );
}
