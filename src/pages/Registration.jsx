
import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from "../firebase/firebase.config"

const Registration = () => {
  const { createNewUser, setuser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");   // ✅ track password live
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);



  // ✅ Validate password rules
  const validatePassword = (password) => {
    const errors = [];

    if (password.length < 6) {
      errors.push("Password must be at least 6 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number");
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photoURL = form.get("photoURL");
    const password = form.get("password");

    if (name.length < 5) {
      setError({ name: "Name must be more than 5 characters long" });
      return;
    }

    const passErrors = validatePassword(password);
    if (passErrors.length > 0) {
      setError({ password: passErrors[0] }); // show first error
      return;
    }

    setLoading(true);

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUserProfile({
          displayName: name,
          photoURL: photoURL
        })
          .then(async () => {
            await user.reload();               // 🔑 refresh latest data
            setuser(user);                     // 🔑 update context
            navigate("/");
          })
          .catch((err) => {
            console.error("Profile update error:", err);
          });
      })
      .catch((error) => {
        console.error("Registration error:", error.code, error.message);
      })
      .finally(() => setLoading(false));
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register
        </h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
              {error.name && <p className="mt-1 text-sm text-red-600">{error.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                Photo URL (Optional)
              </label>
              <input
                id="photoURL"
                name="photoURL"
                type="url"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Paste your photo URL"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}   // ✅ update live
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Create a password"
              />
              {error.password && (
                <p className="mt-1 text-sm text-red-600">{error.password}</p>
              )}

              {/* Live password rule check */}
              <div className="mt-2 text-xs text-gray-500">
                <p>Password must:</p>
                <ul className="list-disc pl-5">
                  <li className={password.length >= 6 ? "text-green-500" : ""}>
                    Be at least 6 characters long
                  </li>
                  <li className={/[A-Z]/.test(password) ? "text-green-500" : ""}>
                    Contain at least one uppercase letter
                  </li>
                  <li className={/[a-z]/.test(password) ? "text-green-500" : ""}>
                    Contain at least one lowercase letter
                  </li>
                  <li className={/[0-9]/.test(password) ? "text-green-500" : ""}>
                    Contain at least one number
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
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


        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>
    </div>

  );
};

export default Registration;


