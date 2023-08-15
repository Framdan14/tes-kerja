import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header'

const Login = () => {
    const [email,setEmail] = useState('')
    const [pw,setPw] = useState('')
    const [data,setData] = useState([])
    const [cek, setCek] = useState(false)
    const navigate = useNavigate();

    const handleLogin = () => {
        if(email == '' || pw == ''){
            setCek(!cek)
        }else{
            // useEffect(() => {
            //     // Panggil API setelah komponen dimuat
            //     axios.post('https://api.jokolodang.com/api/v1/authentication/login',data)
            //         .then(response => {
            //             console.log('Login successful:', response.data);
            //         }
            //     )
            // }, []);
            navigate('/dashboard')
        }
    }
  
  return (
    <>
        <Header/>
        <div className="py-20 bg-white flex flex-col items-center">
            <h2 className='font-bold text-2xl mb-4'>Login</h2>

            <form onSubmit={handleLogin} className='bg-stone-100 rounded-2xl px-8 py-6 w-1/3 border border-stone-300'>
                {cek && <p className='py-1 mb-4 p-2 bg-yellow-300'>Isi Semuanya dengan benar</p>}
                <div className='flex flex-col gap-2'>
                    <span>Email</span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-md'/>
                </div>
                <div className='flex flex-col gap-2 pt-4'>
                    <span>Password</span>
                    <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} className='rounded-md'/>
                </div>
                <div className='pt-10 flex justify-center'>
                    <button className='py-1 bg-blue-500 text-white w-10/12 rounded-2xl font-bold'>Login</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login

