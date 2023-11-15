import Image from 'next/image'

import PageWrapper from '@/components/page-wrapper'
import Pill from '@/components/pill'

export default function Home() {
  return (
    <PageWrapper>
      <div className='flex flex-col max-w-xl lg:max-w-none mx-auto lg:flex-row mt-10'>
        <div className='flex flex-col lg:pr-6 w-full lg:w-[30%]'>
          <div className='py-6 border-2 border-black/10 rounded-md mt-4 flex gap-4 px-4 items-center'>
            <div className='h-20 w-20 block'>
              <Image
                src='/images/avatar.jpg'
                width={2500}
                height={2500}
                alt='change me'
                className='object-cover object-top w-full h-full rounded-full'
                priority
              />
            </div>
            <p className='max-w-sm w-[80%] ml-auto'>
              This is a bio about someone who works in tech. This is the second
              sentence.
            </p>
          </div>

          <div className='flex py-1 bg-black/5 rounded-md mt-4 mb-2'>
            <div className='w-full text-center bg-white ml-1 py-1 rounded-sm'>
              Projects
            </div>
            <div className='w-full text-center mx-1 py-1 rounded-sm'>
              Services
            </div>
          </div>

          {Array.from({ length: 9 }, (_, i) => (
            <Pill key={i} />
          ))}
        </div>

        <div className='w-full h-[35vh] lg:h-[89.5vh] lg:fixed top-10 right-4 lg:mt-4  lg:ml-auto lg:w-[69%] aspect-square border-2 border-black/10 rounded-lg overflow-hidden'>
          <Image
            src='/images/mobile-app-design.png'
            width={2500}
            height={2500}
            alt='change me'
            className='object-cover w-full h-full'
            priority
          />
        </div>
      </div>
    </PageWrapper>
  )
}
