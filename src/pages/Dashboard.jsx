import {BsTruck} from 'react-icons/bs'
import {CiHome} from 'react-icons/ci'
import {MdOutlineLogout} from 'react-icons/md'
import LayoutDashboard from '../components/LayoutDashboard'
import Shipping from '../components/Shipping'
import HeaderAdmin from '../components/HeaderAdmin'
import { useNavigate } from 'react-router-dom'
import TambahShippingComps from '../components/TambahShippingComps'

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderAdmin/>
      <div id='oke' className='flex'>
        <div className='w-1/5 flex flex-col justify-between bg-gray-100 min-h-[calc(100vh-7.5rem)]'>
          <div className='flex flex-col justify-center space-between'>
              <div className='flex items-center py-3 gap-2 px-8 border-b cursor-pointer'><CiHome size={20}/>Dashboard</div>
              <div className='flex items-center py-3 gap-2 px-8 border-b cursor-pointer'><BsTruck size={20}/>Shipping Comps</div>
          </div>
          <div className='bg-blue-500 text-white font-bold'>
              <button className='flex py-3 px-20 gap-2  items-center place-items-center ' onClick={() => navigate('/')}><MdOutlineLogout/>Logout</button>
          </div>
        </div>
        <div className='bg-stone-300 flex-1 py-5 px-4'>
          <div id='hehe' className='px-6 py-4 bg-white rounded-xl shadow-md min-h-[calc(100vh-5.5rem)]'>
            {/* <LayoutDashboard/> */}
            <TambahShippingComps/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
