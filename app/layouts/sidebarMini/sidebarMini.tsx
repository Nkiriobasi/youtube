'use client';

import Link from 'next/link';
import { SIDEBARITEMS } from './sidebarMini.constants';
import { usePathname } from 'next/navigation';

const SidebarMini = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <aside className='fixed left-0 bottom-0 top-[56px] w-[80px] inline-block bg-inherit z-[2028] px-1'>
      <div className='mt-1 flex flex-col items-center w-full'>
        {SIDEBARITEMS.map(
          ({ id, href, title, activeSvgElement, inActiveSvgElement }) => {
            const isActive = pathname.startsWith(href);

            return (
              <div
                key={id}
                className='w-[70px] flex justify-center relative bg-inherit'>
                <Link
                  href={href}
                  title={title}
                  className='pt-4 pb-[14px] outline-none w-full flex flex-col items-center justify-center
                            cursor-pointer hover:dark:bg-[#ffffff14] hover:bg-[#eee] rounded-[10px]'>
                  <div className='dark:text-[#f1f1f1] text-black mb-[6px] inline-flex items-center justify-center relative align-middle fill-current w-6 h-6'>
                    <div className='w-full h-full'>
                      <div className='w-full h-full flex items-center justify-center'>
                        {isActive ? activeSvgElement : inActiveSvgElement}
                      </div>
                    </div>
                  </div>
                  <span className='dark:text-[#f1f1f1] text-black max-w-full block max-h-[1.4rem] overflow-hidden text-ellipsis leading-[1.4rem] font-normal text-[10px]'>
                    {title}
                  </span>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </aside>
  );
};

export default SidebarMini;
