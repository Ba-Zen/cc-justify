import PageWrapper from '@/components/page-wrapper'
import Pill from '@/components/pill'
import Image from 'next/image'

export default function Home() {
  return (
    <PageWrapper>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex flex-col pr-4 w-full lg:w-[37vw] xl:w-[27vw] lg:fixed'>
          <div className='py-6 border-2 border-black/10 rounded-md mt-4 flex gap-4 px-4 items-center'>
            <div className='bg-black/10 rounded-full h-20 w-20 mr-6'></div>
            <p className='max-w-sm'>
              This is a bio about someone who works in tech. This is the second
              sentence.
            </p>
          </div>

          <div className='flex py-1 bg-black/5 rounded-md mt-4'>
            <div className='w-full text-center bg-white ml-1 py-1 rounded-sm'>
              Projects
            </div>
            <div className='w-full text-center  mx-1 py-1 rounded-sm'>
              Services
            </div>
          </div>

          {Array.from({ length: 9 }, (_, i) => (
            <Pill key={i} />
          ))}
        </div>
        <div className='w-full h-[35vh] md:h-[60vh] lg:mt-4 lg:h-[91vh] lg:w-[60vw] lg:fixed right-6 lg:ml-auto xl:w-[70.5vw] aspect-square border-2 border-black/10 rounded-md'></div>
      </div>
    </PageWrapper>
  )
}
