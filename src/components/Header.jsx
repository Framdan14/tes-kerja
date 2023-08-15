import { useContext } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [bg, setBg] = useState(true)

  return (
    <header className='px-8 bg-blue-500 text-white flex justify-between'>
        <div>
            <h2 className="py-3">KLEDO TEST</h2>
        </div>
        <ul className='flex gap-3'>
            <li className={`px-3 py-3 cursor-pointer ${bg ? 'bg-blue-500' : 'bg-black'}`} onClick={(e) => setBg(!bg)}>
                <NavLink to='/profil'>Profile</NavLink>
            </li>
            <li className={`px-3 py-3 cursor-pointer ${bg ? 'bg-blue-500' : 'bg-black'}`} onClick={(e) => setBg(!bg)}>
                <NavLink to='/'>Login</NavLink>
            </li>
        </ul>
    </header>
  )
}

export default Header
