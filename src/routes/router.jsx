import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DataCollections from "../components/DataCollections";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword";


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
        element:<PrivateRoute>
            <DataCollections></DataCollections>
        </PrivateRoute>
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
                element:<Registration></Registration>,
            },
            {
                path: "forgot-password", // Add this route
                element: <ForgotPassword></ForgotPassword>,
            },
        ],
    },
     {
        path:"*",
        element: <h1>Error</h1>,
    },

])

export default router;