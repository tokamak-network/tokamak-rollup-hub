export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[calc(100vh-78px-223px)] min-h-[720px] w-full justify-center pt-[78px] md:min-h-[920px] md:justify-between md:pl-[45px] md:pr-0 xl:flex-col xl:items-center xl:justify-center xl:px-[30px]">
      {children}
    </div>
  );
}
