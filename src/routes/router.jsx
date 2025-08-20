import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DataCollections from "../components/DataCollections";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";


const router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>,
        
    },
     {
        path:"/clothdonate",
        element: <h1>Cloth Donate Layout</h1>,
    },
    {
        path: "/datacollection",
        element:<DataCollections></DataCollections>
    },
     {
        path:"/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:"/auth/login",
                element:<Login></Login>,
            },
              {
                path:"/auth/register",
                element:<h2>Register</h2>,
            },
        ],
    },
     {
        path:"*",
        element: <h1>Error</h1>,
    },

])

export default router;