'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  sidebarLinksSection1,
  sidebarLinksSection2,
  sidebarLinksSection4,
  sidebarLinksSection5,
  sidebarLinksSection6,
} from '@/app/constants';

const Sidebar = (): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <aside
      className={
        'z-[2005] w-[240px] fixed right-auto left-0 top-0 bottom-0 transition-all'
      }>
      <div className='absolute top-0 bottom-0 right-0 left-0 transition-opacity opacity-0 '></div>
      <div className='w-full absolute top-0 bottom-0 right-0 left-0'>
        <div className='h-full flex flex-col'>
          <div className='mt-[56px]'></div>
          <div className='flex-1 basis-[1e-9px] flex flex-col scrollbox'>
            <div className='scrollbox-inner flex-1 basis-[1e-9px]'>
              <div className='block relative'>
                <div className='border-b border-solid dark:border-[#ffffff33] border-[#eee] p-3 block'>
                  {sidebarLinksSection1.map(
                    ({
                      id,
                      href,
                      title,
                      activeSvgElement,
                      inActiveSvgElement,
                    }) => {
                      const isActive = pathname.startsWith(href);

                      return (
                        <div key={id} className='relative w-full block'>
                          <Link
                            href={href}
                            title={title}
                            className={`min-h-[40px] cursor-pointer dark:text-[#f1f1f1] text-black flex flex-row items-center w-full 
                          hover:dark:bg-[#ffffff14] hover:bg-[#eee] rounded-[10px] ${
                            isActive ? 'dark:bg-[#ffffff14] bg-[#eee]' : ''
                          }`}>
                            <div className='px-3 w-full flex flex-row items-center leading-[24px] font-normal text-sm relative'>
                              <div className='dark:text-white text-black mr-6 inline-flex items-center justify-center relative align-middle w-6 h-6'>
                                <div className='w-full h-full flex items-center justify-center fill-current'>
                                  {isActive
                                    ? activeSvgElement
                                    : inActiveSvgElement}
                                </div>
                              </div>

                              <h4
                                className={`text-[13px] leading-[2rem] dark:text-[#f1f1f1] text-black overflow-hidden 
                              text-ellipsis flex-1 ${
                                isActive ? 'font-semibold' : 'font-normal'
                              }`}>
                                {title}
                              </h4>
                            </div>
                          </Link>
                        </div>
                      );
                    }
                  )}

                  <div className='border-t border-solid dark:border-[#ffffff33] border-[#eee] mt-3 pt-3 block'>
                    {sidebarLinksSection2.map(
                      ({
                        id,
                        href,
                        title,
                        activeSvgElement,
                        inActiveSvgElement,
                      }) => {
                        const isActive = pathname.startsWith(href);

                        return (
                          <div key={id} className='relative w-full block'>
                            <Link
                              href={href}
                              title={title}
                              className={`min-h-[40px] cursor-pointer dark:text-[#f1f1f1] text-black flex flex-row items-center w-full 
                          hover:dark:bg-[#ffffff14] hover:bg-[#eee] rounded-[10px] ${
                            isActive ? 'dark:bg-[#ffffff14] bg-[#eee]' : ''
                          }`}>
                              <div className='px-3 w-full flex flex-row items-center leading-[24px] font-normal text-sm relative'>
                                <div className='dark:text-white text-black mr-6 inline-flex items-center justify-center relative align-middle w-6 h-6'>
                                  <div className='w-full h-full flex items-center justify-center fill-current'>
                                    {isActive
                                      ? activeSvgElement
                                      : inActiveSvgElement}
                                  </div>
                                </div>

                                <h4
                                  className={`text-[13px] leading-[2rem] dark:text-[#f1f1f1] text-black overflow-hidden 
                                text-ellipsis flex-1 ${
                                  isActive ? 'font-semibold' : 'font-normal'
                                }`}>
                                  {title}
                                </h4>
                              </div>
                            </Link>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Subscriptions */}
                <div className=''></div>

                {/* Explore */}
                <div className='p-3 border-b border-solid dark:border-[#ffffff33] border-[#eee] block'>
                  <span>
                    <h3 className='block pt-[6px] px-3 pb-1 dark:text-[#f1f1f1] text-black leading-[2.2rem] font-normal text-base'>
                      Explore
                    </h3>
                  </span>

                  <div>
                    {sidebarLinksSection4.map(
                      ({
                        id,
                        href,
                        title,
                        activeSvgElement,
                        inActiveSvgElement,
                      }) => {
                        const isActive = pathname.startsWith(href);

                        return (
                          <div key={id} className='relative w-full block'>
                            <Link
                              href={href}
                              title={title}
                              className={`min-h-[40px] cursor-pointer dark:text-[#f1f1f1] text-black flex flex-row items-center w-full 
                          hover:dark:bg-[#ffffff14] hover:bg-[#eee] rounded-[10px] ${
                            isActive ? 'dark:bg-[#ffffff14] bg-[#eee]' : ''
                          }`}>
                              <div className='px-3 w-full flex flex-row items-center leading-[24px] font-normal text-sm relative'>
                                <div className='dark:text-white text-black mr-6 inline-flex items-center justify-center relative align-middle w-6 h-6'>
                                  <div className='w-full h-full flex items-center justify-center fill-current'>
                                    {isActive
                                      ? activeSvgElement
                                      : inActiveSvgElement}
                                  </div>
                                </div>

                                <h4
                                  className={`text-[13px] leading-[2rem] dark:text-[#f1f1f1] text-black overflow-hidden 
                                text-ellipsis flex-1 ${
                                  isActive ? 'font-semibold' : 'font-normal'
                                }`}>
                                  {title}
                                </h4>
                              </div>
                            </Link>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* More from Youtube */}
                <div className='p-3 border-b border-solid dark:border-[#ffffff33] border-[#eee] block'>
                  <span>
                    <h3 className='block pt-[6px] px-3 pb-1 dark:text-[#f1f1f1] text-black leading-[2.2rem] font-normal text-base'>
                      More from Youtube
                    </h3>
                  </span>

                  <div>
                    {sidebarLinksSection5.map(
                      ({ id, href, title, svgElement }) => {
                        const isActive = pathname.startsWith(href);

                        return (
                          <div key={id} className='relative w-full block'>
                            {href === '/premium' ? (
                              <Link
                                href={href}
                                title={title}
                                className={`min-h-[40px] cursor-pointer dark:text-[#f1f1f1] text-black flex flex-row items-center w-full 
                            hover:dark:bg-[#ffffff14] hover:bg-[#eee] rounded-[10px] ${
                              isActive ? 'dark:bg-[#ffffff14] bg-[#eee]' : ''
                            }`}>
                                <div className='px-3 w-full flex flex-row items-center leading-[24px] font-normal text-sm relative'>
                                  <div className='dark:text-white text-black mr-6 inline-flex items-center justify-center relative align-middle w-6 h-6'>
                                    <div className='w-full h-full flex items-center justify-center fill-current'>
                                      {svgElement}
                                    </div>
                                  </div>

                                  <h4
                                    className={`text-[13px] leading-[2rem] dark:text-[#f1f1f1] text-black overflow-hidden 
                                  text-ellipsis flex-1 ${
                                    isActive ? 'font-semibold' : 'font-normal'
                                  }`}>
                                    {title}
                                  </h4>
                                </div>
                              </Link>
                            ) : (
                              <a
                                href={href}
                                target='_blank'
                                title={title}
                                className={`min-h-[40px] cursor-pointer dark:text-[#f1f1f1] text-black flex flex-row items-center w-full 
                            hover:dark:bg-[#ffffff14] hover:bg-[#eee] rounded-[10px] ${
                              isActive ? 'dark:bg-[#ffffff14] bg-[#eee]' : ''
                            }`}
                                rel='noreferrer'>
                                <div className='px-3 w-full flex flex-row items-center leading-[24px] font-normal text-sm relative'>
                                  <div className='dark:text-white text-black mr-6 inline-flex items-center justify-center relative align-middle w-6 h-6'>
                                    <div className='w-full h-full flex items-center justify-center fill-current'>
                                      {svgElement}
                                    </div>
                                  </div>

                                  <h4
                                    className={`text-[13px] leading-[2rem] dark:text-[#f1f1f1] text-black overflow-hidden 
                                  text-ellipsis flex-1 ${
                                    isActive ? 'font-semibold' : 'font-normal'
                                  }`}>
                                    {title}
                                  </h4>
                                </div>
                              </a>
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* Misc */}
                <div className='p-3 border-b border-solid dark:border-[#ffffff33] border-[#eee] block'>
                  {sidebarLinksSection6.map(
                    ({
                      id,
                      href,
                      title,
                      activeSvgElement,
                      inActiveSvgElement,
                    }) => {
                      const isActive = pathname.startsWith(href);

                      return (
                        <div key={id} className='relative w-full block'>
                          <Link
                            href={href}
                            title={title}
                            className={`min-h-[40px] cursor-pointer dark:text-[#f1f1f1] text-black flex flex-row items-center w-full 
                          hover:dark:bg-[#ffffff14] hover:bg-[#eee] rounded-[10px] ${
                            isActive ? 'dark:bg-[#ffffff14] bg-[#eee]' : ''
                          }`}>
                            <div className='px-3 w-full flex flex-row items-center leading-[24px] font-normal text-sm relative'>
                              <div className='dark:text-white text-black mr-6 inline-flex items-center justify-center relative align-middle w-6 h-6'>
                                <div className='w-full h-full flex items-center justify-center fill-current'>
                                  {isActive
                                    ? activeSvgElement
                                    : inActiveSvgElement}
                                </div>
                              </div>

                              <h4
                                className={`text-[13px] leading-[2rem] dark:text-[#f1f1f1] text-black overflow-hidden 
                              text-ellipsis flex-1 ${
                                isActive ? 'font-semibold' : 'font-normal'
                              }`}>
                                {title}
                              </h4>
                            </div>
                          </Link>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
