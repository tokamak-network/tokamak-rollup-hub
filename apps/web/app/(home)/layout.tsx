export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full pt-[142px] md:pl-[45px] md:pr-0 xl:flex xl:h-[calc(100vh-78px)] xl:flex-col xl:justify-center xl:px-[30px] 2xl:px-[150px]">
      {children}
    </div>
  );
}
