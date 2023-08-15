import foto from '../assets/foto.jpeg'

const HeaderAdmin = () => {
  
    return (
      <header className={`px-8 bg-blue-500 text-white flex justify-between `}>
          <div>
              <h2 className="py-3">KLEDO TEST ADMIN</h2>
          </div>
          <div className='flex items-center gap-3'>
                <img src={foto} alt="iron-man" className='w-7 h-7 rounded-full'/>
                <p  className='px-3 py-3'>Tony Stark</p>
          </div>
      </header>
    )
}

export default HeaderAdmin
