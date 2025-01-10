import { Box, Button, Modal, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { LuScanQrCode } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../components/Context/userContext";
import { ToastType } from "../type";
import { updateTicket } from "../api/ticket";
import { useSocket } from "../components/Context/socketContext";
import { RiQrScan2Line } from "react-icons/ri";


export const Main = () => {

    const [toast, setToast] = useState<ToastType>({ open: false, msg: "" });
    const navigate = useNavigate()
    const match = useParams<{ code: string }>();

    const { currentUser } = useUser()
    const { socket } = useSocket();

    const handleSubmit = async () => {
        // socket?.emit("send-msg");
        if (match.code) {
            const res = await updateTicket(Number(match.code), currentUser.id)
            const { statusCode } = res.data;
            if (statusCode === 200) {
                socket?.emit("send-msg", { code: Number(match.code), seller_id: currentUser.id });
                navigate("/");
            } else {
                setToast({ open: true, msg: "Vé đã được mua" });
            }
        }
    };

    return (
        <div className="flex justify-between items-center flex-col overflow-y-auto h-[100vh]">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div style={{ fontSize: '120px' }}>
                    {match.code}
                </div>
                <div className="py-20 text-lg font-semibold">NGƯỜI BÁN: {currentUser.name && currentUser.name.toUpperCase()}</div>
                <Button variant="contained" className="mr-4" onClick={handleSubmit}>
                    Xác nhận
                </Button>
            </div>
            <div className=" w-full flex justify-center mt-2 p-2 sticky bottom-0  bg-[#cf1e1c]">
                <Link to={'/scan'}>
                    <div className='flex flex-col items-center py-4'>
                        <div className='w-[80px] h-[80px] bg-white mb-4 rounded-md'>
                            <RiQrScan2Line className='w-full h-full' />
                        </div>
                        <p className='uppercase font-semibold text-white'>Quét mã bán vé</p>
                    </div>
                </Link>
            </div>
            <Snackbar
                open={toast.open}
                onClose={() => setToast({ open: false, msg: "" })}
                autoHideDuration={6000}
                message={toast.msg}
            />
        </div>
    )
}