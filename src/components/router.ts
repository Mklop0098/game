import Homepage from "../pages/homepage";
import Login from "../pages/login";
import { Main } from "../pages/main";
import { Scan } from "../pages/scan";
import SignIn from "../pages/signin";
import { StartButton } from "../pages/startButton";

export const publicRoutes = [
    { path: '/login', component: Login },
    { path: '/signin', component: SignIn },
    { path: '/update/:code', component: Main },
    { path: '/scan', component: Scan },
    { path: '/start', component: StartButton },
    { path: '/', component: Homepage },
];

export const privateRoutes = [];