export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full p-[30px] md:pb-[30px] md:pl-[45px] md:pr-0 md:pt-[60px] xl:px-[30px] xl:py-[60px] 2xl:px-[150px] 2xl:py-[62px]">
      {children}
    </div>
  );
}
