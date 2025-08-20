import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log('Login attempt with:', formData);
        // navigate('/home');
    };

    const handleGoogleLogin = () => {
        console.log('Google login clicked');
        // navigate('/home');
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
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                            />
                            {errors.email && <span className="text-error text-sm mt-1">{errors.email}</span>}
                        </div>

                        {/* Password */}
                        <div className="form-control mb-2">
                            <span className="label-text mb-1">Password</span>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className={`input input-bordered w-full ${errors.password ? 'input-error' : ''}`}
                            />
                            {errors.password && <span className="text-error text-sm mt-1">{errors.password}</span>}
                        </div>

                        {/* Forgot Password */}
                        <div className="text-left mb-6">
                            <Link to="/forgot-password" className="label-text-alt link link-primary">
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
