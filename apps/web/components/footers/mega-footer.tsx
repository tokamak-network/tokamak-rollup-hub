import Link from 'next/link';
import { megaFooterCategorys } from './mega-footer-info';

export function MegaFooter() {
  return (
    <div className="mt-[100px] flex w-full flex-wrap justify-between border-b border-t border-white pt-5 md:border-t-0">
      {megaFooterCategorys.map((category, index) => (
        <div key={index} className="mb-5 flex w-full flex-col gap-1 sm:w-1/2 md:w-auto">
          <h3 className="text-xl">{category.title}</h3>
          <ol className="flex flex-col gap-1 text-sm text-trh-gray">
            {category.items.map((item, index) => (
              <Link key={index} href={item.link} rel="noopener noreferrer" target="_blank">
                <li>
                  {item.name}
                  {item.super ? <sup>{item.super}</sup> : null}
                </li>
              </Link>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
