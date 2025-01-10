import { createContext, PropsWithChildren, useContext } from "react";
import { SocketIoHookReturn } from "../../type";
import { host } from '../../api/api'
import { io } from "socket.io-client";

export const SocketIoContext = createContext<SocketIoHookReturn>({} as SocketIoHookReturn);


export const useSocket = (): SocketIoHookReturn => {
    return useContext(SocketIoContext);
};


export const SocketIoContextProvider: React.FC<PropsWithChildren> = (props) => {

    const socket = io("http://localhost:5001", {
        transports: ["websocket"],
    });

    socket.on("connect", () => {
        console.log("Connected to server:", socket.id);
    });

    socket.on("connect_error", (err) => {
        console.error("Connection Error:", err);
    });


    return (
        <SocketIoContext.Provider value={{ socket }}>
            {props.children}
        </SocketIoContext.Provider>
    );
}