import { useEffect,useState } from 'react';
import axios from 'axios';
import {PiMagnifyingGlassBold} from 'react-icons/pi'

const Shipping = () => {
    const[ship,setShip] = useState([])
    const [car, setCari] = useState('')

    useEffect(() => {
        // Panggil API setelah komponen dimuat
        axios.get('https://api.jokolodang.com/api/v1/finance/shippingComps')
          .then(response => {
            setShip(response.data);
          })
      }, []); // Efek ini hanya dijalankan sekali setelah komponen dimuat
    

  return (
    <div className='flex flex-col font-bold'>
        <div className='flex justify-between'>
            <h1>Shipping Comps</h1>
            <div className='flex p-1 pl-2 gap-2 text-gray-200 items-center border-2 rounded-lg border-gray-300'>
                <PiMagnifyingGlassBold/>
                <input type="text" value={cari} placeholder='Cari' onChange={(e) => setCari(e.target.value)} className='outline-0 text-xs '/>
            </div>
        </div>
      <div className='px-20 py-20 text-stone-500'>
        <div className='px-10 bg-stone-100 min-h-[calc(100vh-20rem)] rounded-md'>
            <h1 className='text-black'>Nama</h1>
            <ul>
                {
                    ship.map((id) => {
                        return <li>{id.nama}</li>
                    })
                }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Shipping
