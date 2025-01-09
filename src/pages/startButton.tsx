import { Button, ButtonBase } from "@mui/material"
import { useSocket } from "../components/Context/socketContext"

export const StartButton = () => {

    const { socket } = useSocket()

    function handleClick() {
        socket?.emit('start-slot')
    }

    return (
        // <ButtonBase >hello</ButtonBase>
        <Button variant="contained" onClick={handleClick}>Contained</Button>
    )
}