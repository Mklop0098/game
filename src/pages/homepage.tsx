import React from 'react'
import { IoQrCode } from "react-icons/io5";
import { RiQrScan2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';




const Homepage = () => {
    return (
        <div className='bg-red-500 w-[100vw] flex justify-center items-center h-[100vh]'>
            <div className='flex flex-col items-center p-12'>
                <div className='w-[120px] h-[120px] bg-white mb-4 rounded-md'>
                    <IoQrCode className='w-full h-full' />
                </div>
                <p className='text-2xl uppercase font-semibold text-white'>Mã thanh toán</p>
            </div>
            <Link to={'/scan'}>
                <div className='flex flex-col items-center p-12'>
                    <div className='w-[120px] h-[120px] bg-white mb-4 rounded-md'>
                        <RiQrScan2Line className='w-full h-full' />
                    </div>
                    <p className='text-2xl uppercase font-semibold text-white'>Quét mã bán vé</p>
                </div>
            </Link>
        </div>
    )
}
export default Homepage
