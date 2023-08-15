import foto from '../assets/foto.jpeg'
import Header from '../components/header'

const Profil = () => {
  return (
    <>
      <Header/>
      <div className='py-16 flex justify-center bg-white font-bold'>
        <div>
          <h1 className='font-bold text-2xl pb-3 text-center'>Profile</h1>
          <div className='flex  border border-slate-100 bg-neutral-50 rounded-2xl py-5 px-10 gap-6'>
              <div className='flex flex-col gap-4'>
                  <div>
                      <h1 className='text-stone-400'>Nama</h1>
                      <p>Farhan Ramadhan Muchtar</p>
                  </div>
                  <div>
                      <h1 className='text-stone-400'>Alamat</h1>
                      <p>Jl. Dakota No.8a Sukaraja, Bandung, Jabar, Indonesia</p>
                  </div>
                  <div>
                      <h1 className='text-stone-400'>No. HP</h1>
                      <p>0858-3144-8341</p>
                  </div>
                  <div>
                      <h1 className='text-stone-400'>Email</h1>
                      <p>farhanrama1402@gmail.com</p>
                  </div>
                  <div>
                      <h1 className='text-stone-400'>Motto</h1>
                      <p>Work hard, study hard, life will be easy later</p>
                  </div>
              </div>
              <div>
                  <img src={foto} alt="Iron Man" className='w-20 h-20 rounded-full mt-2 border-2 border-gray-400'/>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profil
