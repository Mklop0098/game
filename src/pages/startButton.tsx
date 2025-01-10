
// import { useSocket } from "../components/Context/socketContext"


export const StartButton = () => {

    // const { socket } = useSocket()

    function handleClick() {
        // socket?.emit('start-slot')
    }

    return (
        <div className='bg-[#cf1e1c] w-[100vw] flex justify-center items-center h-[100vh]'>
            <div className='flex flex-col items-center px-12 cursor-pointer' onClick={handleClick}>
                <div className='w-[120px] h-[120px] bg-white flex justify-center items-center m-4 rounded-md'>
                    <p className='uppercase font-bold text-[#cf1e1c]'>Quay số</p>
                </div>
            </div>
        </div>
    )
}