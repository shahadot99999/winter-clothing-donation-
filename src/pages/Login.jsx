import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';

const Login = () => {

    const { userLogin, setuser } = useContext(AuthContext);

    const [error, setError] = useState({});

     const [emailValue, setEmailValue] = useState(''); // Add state for email

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ email, password });

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setuser(user);
                //  navigate(location?.state ? location.state: "/");
                // get where user came from
                const from = location.state?.from?.pathname || "/";
                const campaignState = location.state?.from?.state; // carry campaign
                navigate(from, { state: campaignState });

            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            });
    };



    const handleGoogleLogin = () => {
        //console.log('Google login clicked');
        // navigate('/home');
        signInWithPopup(auth, provider)
        .then((result)=>{
    // console.log(result);
   })
   .catch(error =>{
    // console.log(error);
   })
    };

    // Handle email input change
    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };

      

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="card-title justify-center text-3xl font-bold mb-6">
                        User Login
                    </h2>

                    <form onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className="form-control mb-4">
                            <span className="label-text mb-1">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={emailValue}
                                onChange={handleEmailChange}
                                placeholder="Enter your email"
                                className={`input input-bordered w-full ${error.email ? 'input-error' : ''}`}
                            />

                        </div>

                        {/* Password */}
                        <div className="form-control mb-2">
                            <span className="label-text mb-1">Password</span>
                            <input
                                type="password"
                                name="password"

                                placeholder="Enter your password"
                                className={`input input-bordered w-full ${error.password ? 'input-error' : ''}`}
                            />
                            {error.login && <span className="text-error text-sm mt-1">{error.login}</span>}
                        </div>

                        {/* Forgot Password */}
                        <div className="text-left mb-6">
                            <Link
                                to="/auth/forgot-password"
                                state={{ email: emailValue }} // Pass the current email value
                                className="label-text-alt link link-primary"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login Button Center */}
                        <div className="flex justify-center mt-4">
                            <button type="submit" className="btn btn-primary w-1/2">Login</button>
                        </div>
                    </form>

                    <div className="divider my-6">OR</div>

                    {/* Google Login Center */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleGoogleLogin}
                            className="btn btn-outline gap-2 w-3/4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5 h-5">
                                <path fill="red" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>

                    <div className="text-center mt-6">
                        <span className="text-gray-600">Don't have an account? </span>
                        <Link to="/auth/register" className="link link-primary font-medium">Register here</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
