import { createBrowserRouter } from "react-router-dom"
import Login from "../Login";
import SignUpPage from "../SignUp";

const router= createBrowserRouter([
{
    path: '/',
    element: <Login/>
},
{
    path: '/signup',
    element:<SignUpPage/>
}
]);

export default router