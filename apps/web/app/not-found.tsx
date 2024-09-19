import Link from 'next/link';
import TRHSymbol from '../public/symbol-trh.svg';
import Image from 'next/image';
import { headers } from 'next/headers';

const commingSoonList = [
  '/discover/tokamak-op',
  '/discover/tokamak-zk',
  '/more/user-guide',
  '/more/help',
];

export default async function NotFound() {
  const headersList = headers();
  const currentPath = headersList.get('x-current-path');

  return (
    <div className="fixed left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center gap-4 bg-black px-3">
      <Image src={TRHSymbol} className="size-16" alt="symbol" />
      <div className="flex h-16 flex-col justify-center">
        <h2 className="text-3xl font-bold">
          {commingSoonList.find((item) => item === currentPath) ? 'Coming Soon' : 'Not Found'}
        </h2>
        <p>
          Return {''}
          <Link href="/">
            <span className="text-xl font-semibold text-tokamak-blue">Home</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
