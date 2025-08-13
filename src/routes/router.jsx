import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


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
        path:"/auth",
        element: <h1>Login Layout</h1>,
    },
     {
        path:"*",
        element: <h1>Error</h1>,
    },

])

export default router;