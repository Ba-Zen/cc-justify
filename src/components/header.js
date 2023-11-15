import Link from 'next/link'
import PageWrapper from './page-wrapper'

export default function Header() {
  return (
    <PageWrapper className='mt-4'>
      <div className='w-full border-2 border-black/10 rounded-lg overflow-hidden flex justify-between items-center'>
        <div className='flex gap-2 uppercase pl-4'>
          <Link href='/'>Home</Link>
          <Link href='/'>About Me</Link>
        </div>
        <Link
          href='/contact'
          className='h-full bg-black text-white py-2 px-6'
        >
          Contact
        </Link>
      </div>
    </PageWrapper>
  )
}
