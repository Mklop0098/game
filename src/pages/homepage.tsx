import React from 'react'
import { IoQrCode } from "react-icons/io5";
import { RiQrScan2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';




const Homepage = () => {
    return (
        <div className='bg-[#cf1e1c] w-[100vw] flex justify-center items-center h-[100vh]'>
            <Link to={'/payment'}>
                <div className='flex flex-col items-center p-12'>
                    <div className='w-[120px] h-[120px] bg-white mb-4 rounded-md'>
                        <IoQrCode className='w-full h-full' />
                    </div>
                    <p className='uppercase font-semibold text-white'>Mã thanh toán</p>
                </div>
            </Link>
            <Link to={'/scan'}>
                <div className='flex flex-col items-center p-12'>
                    <div className='w-[120px] h-[120px] bg-white mb-4 rounded-md'>
                        <RiQrScan2Line className='w-full h-full' />
                    </div>
                    <p className='uppercase font-semibold text-white'>Quét mã bán vé</p>
                </div>
            </Link>
        </div>
    )
}
export default Homepage
