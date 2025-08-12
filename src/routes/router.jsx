import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:"/",
        element: <h1>Home Layout</h1>,
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