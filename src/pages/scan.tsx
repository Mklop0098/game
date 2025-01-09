import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect, useState } from 'react'
import { IoQrCode } from "react-icons/io5";


export const Scan = () => {
    const [scanResult, setScanResult] = useState<number>(0)
    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250
            },
            fps: 5
        }, true)
        const success = (result: any) => {
            scanner.clear()
            setScanResult(scanResult + 1)
            if (result.length < 4 && result.length > 0) {
                window.open("/update/" + result, '_self');
            }
        }
        const error = (error: any) => {
            console.warn(error)
        }
        scanner.render(success, error)
    }, [scanResult])
    return (
        <div className='flex flex-col items-center justify-center'>
            <div id='reader' className='w-full h-full'></div>
            <div className='flex flex-col items-center p-4 bg-red-500 w-full flex-1'>
                <div className='w-[80px] h-[80px] bg-white mb-4 rounded-md'>
                    <IoQrCode className='w-full h-full' />
                </div>
                <p className='text-xl uppercase font-semibold text-white'>Mã thanh toán</p>
            </div>
        </div >
    )
}