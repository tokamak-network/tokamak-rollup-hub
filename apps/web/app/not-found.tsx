import Link from 'next/link';
import TRHSymbol from '../public/symbol-trh.svg';
import Image from 'next/image';
import { headers } from 'next/headers';

export default async function NotFound() {
  const headersList = headers();
  const currentPath = headersList.get('x-current-path');

  return (
    <div className="fixed left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center gap-4 bg-white px-3 dark:bg-black">
      <Image src={TRHSymbol} className="size-16" alt="symbol" />
      <div className="flex h-16 flex-col justify-center">
        <h2 className="text-3xl font-bold">
          {currentPath === '/discover/tokamak-op' ? (
            <div>
              <p>Thanos Testnet Status Page and Details</p>
              <p>Coming Soon</p>
            </div>
          ) : currentPath === '/discover/tokamak-zk' ? (
            <div>
              <p>Details about the ZK Stack</p>
              <p>Coming Soon</p>
            </div>
          ) : (
            'Not Found'
          )}
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
