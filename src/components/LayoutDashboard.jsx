const LayoutDashboard = () => {
  return (
    <div className='flex flex-col font-bold'>
      <h1>Dashboard</h1>
      <div className='px-20 py-20 text-stone-500'>
        <div className='px-10 bg-stone-100 min-h-[calc(100vh-20rem)] rounded-md  text-center flex flex-col justify-center'>
            <h1 className='text-xl'>Selamat Datang</h1>
            <h1 className='mt-2 text-stone-400'>Tony Stark</h1>
        </div>
      </div>
    </div>
  )
}

export default LayoutDashboard
