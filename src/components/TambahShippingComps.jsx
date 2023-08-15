import React from 'react'

const TambahShippingComps = () => {
  return (
    <div className='flex flex-col font-bold'>
      <h1>Tambah Shipping Comps</h1>
      <div className='bg-stone-100 min-h-[calc(100vh-20rem)] rounded-md '>
          <h1 className='text-sm text-stone-400 pt-8 pb-3 flex flex-col'>Nama</h1>
          <input type="text" className='border'/>
          <button className='bg-blue-500 px-3 py-1 text-white'>Simpan</button>
      </div>
    </div>
  )
}

export default TambahShippingComps
