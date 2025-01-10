import React from 'react'
import pay from '../assets/payment.jpg'
import { Link } from 'react-router-dom'
import { RiQrScan2Line } from "react-icons/ri";
const Payment = () => {
    return (
        <div className='bg-[#cf1e1c] w-[100vw] flex-col flex justify-center items-center h-[100vh]'>
            <div className='w-[80%] h-[60%] bg-white' style={{ background: `url(${pay})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
            <Link to='/scan' className='flex flex-col items-center justify-center p-4 w-full mt-5'>
                <div className='w-[80px] h-[80px] bg-white mb-4 rounded-md'>
                    <RiQrScan2Line className='w-full h-full' />
                </div>
                <p className='text-xl uppercase font-semibold text-white'>Quét mã bán vé</p>
            </Link>
        </div>
    )
}
export default Payment
