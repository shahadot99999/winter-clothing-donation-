
import { Link } from 'react-router-dom';
import userIcon from '../assets/usericon.png';
import logo from "../assets/logo.png"
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user, logOut}= useContext(AuthContext);
    return (
        <div className='flex justify-between items-center mx-auto'>

            <div className="icon">
                <div className="">
                    <img className='h-12 ml-16' src={logo} alt="" />
                    <p>{user?.email}</p>
                </div>
            </div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>

            <div className="flex items-center gap-3">
                {user ? (
                    <>
                        {/* ✅ Only show uploaded image */}
                        <img
                            src={user.photoURL}
                            alt="Profile"
                            className="w-8 h-8 rounded-full border"
                        />

                        <span>{user.displayName || user.email}</span>

                        <button
                            onClick={logOut}
                            className="px-3 py-1 bg-black text-white rounded shadow"
                        >
                            Log-Out
                        </button>
                    </>
                ) : (
                    <a href="/auth/login" className="px-3 py-1 bg-indigo-600 text-white rounded">
                        Login
                    </a>
                )}
            </div>

  
            {/* <div className="login flex gap-2 items-center">
                {user && user.email ? (
                    <div className="flex items-center gap-2">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src={user.photoURL || userIcon}   // fallback if no photo
                            alt="user"
                        />
                        <p>{user.displayName || user.email}</p>
                    </div>
                ) : (
                    <Link to="/auth/login" className="btn btn-neutral rounded-none">
                        Login
                    </Link>
                )}

                {user && (
                    <button onClick={logOut} className="btn btn-neutral rounded-none">
                        Log-Out
                    </button>
                )}
            </div> */}
            {/* <div className="login flex gap-2 items-center">
                <div className="">
                   {user && user?.email ? (
                     <div>
                        <img className='w-10 rounded-full' src={user?.photoURL} alt='' />
                        <p>{user.displayName}</p>
                     </div>
                   ):(
                     <img className='h-7' src={userIcon} alt="" />
                   )
                   }                    
                </div>
                {
                   user && user?.email ? (
                    <button onClick={logOut} className='btn btn-neutral rounded-none'
                    >Log-Out</button>
                   ) : ( <Link to="/auth/login" className='btn btn-neutral rounded-none'>
                    Login
                    </Link>)
                }
                <button >
                   
                    </button>
            </div> */}
           
        </div>
    );
};

export default Navbar;


