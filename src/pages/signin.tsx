import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterInputType, ToastType } from "../type";
import Snackbar from "@mui/material/Snackbar";
import { useUser } from "../components/Context/userContext";
import { register } from "../api/user";
import bg from '../assets/B.png'

export default function SignIn() {
    const [input, setInput] = useState<RegisterInputType>({} as RegisterInputType);
    const [toast, setToast] = useState<ToastType>({ open: false, msg: "" });
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("game-user")) {
            navigate("/");
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.name && input.phone) {
            const res = await register(input);
            const { message, statusCode, data } = res.data;
            if (statusCode === 200) {
                localStorage.setItem("game-user", JSON.stringify(data));
                navigate("/");
            } else {
                setToast({ open: true, msg: message });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12" style={{ background: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg rounded-lg">
                <div className="bg-white w-full rounded-md">
                    <div className="flex px-5 pt-8 flex-col items-start bg-white rounded-md">
                        <span className="text-2xl font-semibold">Tạo tài khoản bán vé</span>
                    </div>
                    <form className="px-5 py-7" onSubmit={handleSubmit}>
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">
                            Nhập số điện thoại
                        </label>
                        <input
                            type="phone"
                            className={`outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full`}
                            onChange={(e) => setInput({ ...input, phone: e.target.value })}
                        />
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">
                            Nhập tên
                        </label>
                        <input
                            type="text"
                            className={`outline-none border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full`}
                            onChange={(e) => setInput({ ...input, name: e.target.value })}
                        />
                        <button
                            type="submit"
                            className="mt-2 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                        >
                            <span className="inline-block mr-2">Bắt đầu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4 inline-block"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
                <Snackbar
                    open={toast.open}
                    onClose={() => setToast({ open: false, msg: "" })}
                    autoHideDuration={6000}
                    message={toast.msg}
                    key={'topright'}
                />
            </div>
        </div>
    );
}