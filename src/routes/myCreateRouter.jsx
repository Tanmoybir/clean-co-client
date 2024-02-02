import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services/Services";
import Booking from "../pages/Booking/Booking";
import Orders from "../pages/Orders/Orders";

const myCreateRouter = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children:([
            {
                index:true,
                element:<Home/>
            },
            {
                path: 'about',
                element:<PrivateRoute><About/></PrivateRoute>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'/services',
                element: <PrivateRoute><Services/></PrivateRoute>
            },
            {
                path:'/booking/:id',
                element:<PrivateRoute><Booking/></PrivateRoute>
            },
            {
                path: '/orders',
                element:<PrivateRoute><Orders/></PrivateRoute>
            }
        ])     
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])

export default myCreateRouter;