import Login from "../pages/login";
import { Main } from "../pages/main";
import { Scan } from "../pages/scan";
import SignIn from "../pages/signin";

export const publicRoutes = [
    { path: '/login', component: Login },
    { path: '/signin', component: SignIn },
    { path: '/update/:code', component: Main },
    { path: '/', component: Scan },
];

export const privateRoutes = [];