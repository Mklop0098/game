import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect, useState } from 'react'

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
            window.open("/update/" + result, '_self');
            setScanResult(scanResult + 1)
        }
        const error = (error: any) => {
            console.warn(error)
        }
        scanner.render(success, error)
    }, [scanResult])
    return (
        <div className='flex items-center justify-center'>
            <div id='reader' className='w-full h-full'></div>
        </div >
    )
}