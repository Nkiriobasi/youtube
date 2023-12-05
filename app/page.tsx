import ThemeSwitcher from '../app/components/themeSwitcher/themeSwitcher';
import MediaFrame from './components/mediaFrame/mediaFrame';

export default function Home(): JSX.Element {
  return (
    <main className='flex mt-14 ml-[240px] overflow-hidden'>
      <div className='flex flex-1 basis-[1e-9px] flex-col items-center'>
        {/* Alert Banner */}
        <div className="flex justify-center w-full"></div>

        {/* Page Contents */}
        <div className="mb-4 w-full flex flex-row justify-start">
          <div className="flex-1 basis-[1e-9px] max-w-full min-w-0">
            <div className="flex flex-col items-center">
              {/* Header */}
              <div className=""></div>

              <div className="mt-8 w-full flex flex-wrap justify-start">
                {/* Content Grid */}
                <div className="w-full flex justify-center">
                  <div className="w-full mx-4 flex">
                    <MediaFrame />
                    <MediaFrame />
                    <MediaFrame />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refresh */}
        <div className=""></div>
      </div>

      {/* <ThemeSwitcher /> */}
    </main>
  );
}
