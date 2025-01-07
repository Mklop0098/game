import { Box, Button, Modal, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { LuScanQrCode } from "react-icons/lu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../components/Context/userContext";
import { ToastType } from "../type";
import { updateTicket } from "../api/ticket";

export const Main = () => {

    const [toast, setToast] = useState<ToastType>({ open: false, msg: "" });
    const navigate = useNavigate()
    const match = useParams<{ code: string }>();

    const { currentUser } = useUser()

    // useEffect(() => {
    //     if (localStorage.getItem("game-user") === null) {
    //         navigate("/login");
    //     }
    // }, []);

    const handleSubmit = async () => {
        if (match.code) {
            const res = await updateTicket(Number(match.code), currentUser.id)
            console.log(res)
            const { statusCode, message } = res.data;
            if (statusCode === 200) {
                navigate("/");
            } else {
                setToast({ open: true, msg: "Vé đã được mua" });
            }
        }
    };

    return (
        <div className="flex justify-between items-center flex-col overflow-y-auto h-[100vh]">
            <div className=" bg-gray-200 w-full flex justify-center mb-2 p-2 sticky top-0">
                LOTTERY
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div style={{ fontSize: '100px' }}>
                    {match.code}
                </div>
                <div className="py-20 text-lg font-semibold">NGƯỜI BÁN: {currentUser.name && currentUser.name.toUpperCase()}</div>
                <Button variant="contained" className="mr-4" onClick={handleSubmit}>
                    Xác nhận
                </Button>
            </div>
            <div className=" bg-gray-200 w-full flex justify-center mt-2 p-2 sticky bottom-0">
                <Link to={'/'}>
                    <LuScanQrCode size={40} />
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