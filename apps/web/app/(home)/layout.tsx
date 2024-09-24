import { MegaFooter } from '@/components/footers/mega-footer';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-78px)]">
      {children}
      <div className="flex w-full justify-center px-[30px]">
        <div className="w-full md:max-w-[1620px]">
          <MegaFooter />
        </div>
      </div>
    </div>
  );
}
