import { PropsWithChildren, ReactElement, useEffect } from "react"
import { useNavigate } from "react-router-dom"
type LayoutProps = {
    children: ReactElement
}
export const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => {

    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("game-user") === null) {
            navigate("/signin");
        }
    }, []);

    return (
        <div>{props.children}</div>
    )
}