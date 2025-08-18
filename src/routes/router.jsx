import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DataCollections from "../components/DataCollections";


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
        element: <h1>Login Layout</h1>,
    },
     {
        path:"*",
        element: <h1>Error</h1>,
    },

])

export default router;