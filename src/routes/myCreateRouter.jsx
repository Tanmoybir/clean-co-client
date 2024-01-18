import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

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
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
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