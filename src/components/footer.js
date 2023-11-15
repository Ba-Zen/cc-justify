import PageWrapper from './page-wrapper'

export default function Footer() {
  return (
    <PageWrapper className='flex justify-between py-2 '>
      <p>CC Justify 2023</p>
      <div className='flex gap-x-2'>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Instagram</p>
      </div>
    </PageWrapper>
  )
}
