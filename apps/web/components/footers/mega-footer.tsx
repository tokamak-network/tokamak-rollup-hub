import Link from 'next/link';
import { megaFooterCategorys } from './mega-footer-info';

export function MegaFooter() {
  return (
    <div className="mt-[100px] flex w-full flex-wrap justify-between border-b border-t border-[#DFE4EE] pt-5 dark:border-[#1D2838] md:border-t-0 xl:mt-[10px]">
      {megaFooterCategorys.map((category, index) => (
        <div key={index} className="mb-5 flex w-full flex-col gap-1 sm:w-1/2 md:w-auto">
          <h3 className="text-xl font-bold dark:text-[#D8DFE9]">{category.title}</h3>
          <ol className="flex flex-col gap-1 text-sm text-trh-gray">
            {category.items.map((item, index) => {
              if (item.multiLink) {
                return (
                  <li key={index} className="text-[#4C4C4C] dark:text-[#616D7E]">
                    {item.multiLink.items.map((mItem, index) => (
                      <Link key={index} href={mItem.link} rel="noopener noreferrer" target="_blank">
                        {mItem.name}
                      </Link>
                    ))}
                  </li>
                );
              } else {
                return (
                  <Link key={index} href={item.link} rel="noopener noreferrer" target="_blank">
                    <li className="text-[#4C4C4C] dark:text-[#616D7E]">
                      {item.name}
                      {item.super ? <sup>{item.super}</sup> : null}
                    </li>
                  </Link>
                );
              }
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}
