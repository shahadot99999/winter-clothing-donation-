import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';


// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {

    const { userLogin, setuser } = useContext(AuthContext);

    const [error, setError] = useState({});

    // Add state for email
    const [emailValue, setEmailValue] = useState('');

    // State for password visibility
    const [showPassword, setShowPassword] = useState(false);

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log({ email, password });

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
            .then((result) => {
                // console.log(result);
            })
            .catch(error => {
                // console.log(error);
            })
    };

    // Handle email input change
    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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

                        {/* Password with toggle */}
                        <div className="form-control mb-2">
                            <span className="label-text mb-1">Password</span>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    className={`input input-bordered w-full pr-10 ${error.password ? 'input-error' : ''}`}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                                    onClick={togglePasswordVisibility}
                                >
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                        className="w-4 h-4"
                                    />
                                </button>
                            </div>
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
                            <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 text-red-600" />
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
