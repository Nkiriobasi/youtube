import Link from "next/link"
import Image from "next/image"
import images from '../../../public/assets';

const MediaFrame = () => {
  return (
    <div className='relative mx-4 mb-10 w-full'>
      <div className='h-full flex items-start justify-center'>
        <div className='relative max-w-[500px] block w-full'>
          <div className='relative h-full flex flex-col'>
            <div></div>
            <div></div>
            <div className='relative cursor-pointer flex-auto flex flex-row'>
              <Link 
                title=''
                href='' 
                className='h-9 mt-3 mr-3 inline-block cursor-pointer'
              >
                <span className='inline-block w-9 h-9 rounded-full overflow-hidden bg-transparent'>
                  <Image
                    src={images.profilePicture}
                    className="block max-w-full"
                    draggable='false'
                    alt='Avatar image'
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    priority
                  />
                </span>
              </Link>

              <div className='overflow-x-hidden pr-6'>
                <h3 className='text-text-primary mt-3 mb-1'>
                  <Link href='' className='block cursor-pointer'>
                    <span 
                      className='text-inherit text-base leading-normal font-medium overflow-hidden 
                      max-h-[70px] text-ellipsis whitespace-normal'
                    >
                      1 Week After their wedding, Man ends his marriage because of what he saw in his cctv camera
                    </span>
                  </Link>
                </h3>

                <div className='flex flex-col'>
                  <div className='flex flex-col flex-wrap text-[#aaa]'>
                    <div className='text-xl leading-7 font-normal max-w-full flex-wrap flex items-center'>
                      <span className='inline-block max-w-full overflow-hidden'>
                        <Link href='' className='flex pr-[1.6px] mr-[-1.6px] text-sm'>
                          IPALLYTALKER
                        </Link>
                      </span>
                    </div>
                    <div className='text-xl leading-tight font-normal overflow-hidden flex text-ellipsis max-w-full flex-wrap'>
                      <span className='inline-block text-sm'>22K views</span>
                      <span className="inline-block before:content-['•'] before:mx-1 text-sm">
                        14 hours ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=''></div>
          </div>

          <div className=''></div>
          <div className=''></div>
        </div>
      </div>
    </div>
  )
}

export default MediaFrame