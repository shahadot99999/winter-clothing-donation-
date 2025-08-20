
import { Link } from 'react-router-dom';
import userIcon from '../assets/usericon.png';
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-auto'>

            <div className="icon">
                <div className="">
                    <img className='h-12 ml-16' src={logo} alt="" />
                </div>
            </div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    <img className='h-7' src={userIcon} alt="" />                    
                </div>
                <button className='btn btn-neutral rounded-none'>
                    <Link to="/auth/login">
                    Login
                    </Link>
                    </button>
            </div>
           
        </div>
    );
};

export default Navbar;