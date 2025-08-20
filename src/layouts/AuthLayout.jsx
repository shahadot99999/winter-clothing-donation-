import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AuthLayout = () => {
    return (
        <div>
            <header className="py-3 w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            <Footer>
                <Footer></Footer>
            </Footer>
        </div>
    );
};

export default AuthLayout;