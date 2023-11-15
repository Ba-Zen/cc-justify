import PageWrapper from '@/components/page-wrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <PageWrapper>
      <div className='py-6 border border-black rounded-md mt-4 flex gap-4 px-4 items-center'>
        <div className='bg-black/50 rounded-full h-20 w-20 mr-6'></div>
        <p className='max-w-sm'>
          This is a bio about someone who works in tech. This is the second
          sentence.
        </p>
      </div>
    </PageWrapper>
  )
}
