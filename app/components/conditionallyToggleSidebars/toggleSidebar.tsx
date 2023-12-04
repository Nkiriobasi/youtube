'use client';

import { useContext } from 'react';
import { VisibilityContext } from '../../context/visibility.context';

const ToggleSidebar = (): React.JSX.Element => {
  const { sidebarIsActive, setSidebarIsActive } = useContext(VisibilityContext);

  return (
    <>
      <div className='dark:text-white text-black outline-none flex w-[40px] h-[40px]'>
        <div>
          <div
            onClick={() => {
              setSidebarIsActive(!sidebarIsActive);
            }}
            className='text-inherit cursor-pointer flex hover:dark:bg-[#ffffff1a] hover:bg-[#eee] rounded-[50%]'>
            <div className='relative inline-block leading-none p-2'>
              <button className='align-middle cursor-pointer w-full h-full'>
                <div className='inline-flex items-center justify-center relative align-middle fill-current'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <svg
                      height='24'
                      viewBox='0 0 24 24'
                      width='24'
                      focusable='false'
                      className='block w-full h-full pointer-events-none dark:text-white text-black'>
                      <path d='M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z'></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleSidebar;
