import Link from 'next/link'
import PageWrapper from './page-wrapper'

export default function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 w-full z-10 bg-white'>
      <div className='w-full border-b-2 border-black/10 overflow-hidden flex justify-end items-center'>
        <div className='flex gap-2 pl-4 items-center'>
          <Link href='/'>Home</Link>
          <Link href='/'>About Me</Link>

          <Link
            href='/contact'
            className='h-full bg-black text-white py-2 px-6 ml-4'
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
