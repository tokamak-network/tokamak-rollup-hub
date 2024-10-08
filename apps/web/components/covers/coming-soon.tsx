import Link from 'next/link';

interface ComingSoonProps {
  text: string;
}

export default function ComingSoon({ text }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[33px] font-bold">Coming Soon</h1>
      <p className="text-lg font-medium text-[#7E7E8F] dark:text-[#616D7E]">{text}</p>
      <div className="mt-3">
        <span>Return {''}</span>
        <Link href={'/'}>
          <span className="font-bold text-tokamak-blue">Home</span>
        </Link>
      </div>
    </div>
  );
}
