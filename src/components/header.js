import Link from 'next/link'
import PageWrapper from './page-wrapper'

export default function Header() {
  return (
    <PageWrapper className='fixed top-0 left-0 right-0 w-full z-10 bg-white'>
      <div className='w-full overflow-hidden pt-2 flex justify-between items-center'>
        <div className='flex gap-2 pl-4 items-center'>
          <Link href='/'>Home</Link>
          <Link href='/'>About Me</Link>
        </div>
        <Link
          href='/contact'
          className='h-full bg-black text-white py-2 px-6 ml-4 rounded-md'
        >
          Contact
        </Link>
      </div>
    </PageWrapper>
  )
}
