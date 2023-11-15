export default function Pill() {
  return (
    <div className='flex gap-4 border-2 border-black/10 my-4 py-4 pl-4 rounded-md'>
      <div className='w-20 h-20 rounded-md bg-black/10'></div>

      <div className='flex flex-col gap-y-2 justify-center px-2'>
        <p className='text-black font-semibold'>Project title</p>
        <p className='text-black/50'>
          This is a description about the project.
        </p>
      </div>
    </div>
  )
}
