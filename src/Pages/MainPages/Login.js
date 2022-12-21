import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { UserContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtToken } from "../Others/jwtToken";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { signInUser, resetPassword, googleUser, facebookUser } =
    useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isPassVisible, setISPassVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // Login user
  const handleLogin = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // set jwt token
        jwtToken(user);
        // End jwt token
        form.reset();
        setErrorMessage("");
        navigate(from, { replace: true });
        setIsLoading(false);
        toast.success("Successfully Log in!", { autoClose: 2000 });
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
        setIsLoading(false);
      });
  };

  // reset password
  const handleResetPass = () => {
    if (email) {
      resetPassword(email)
        .then(() => {
          alert("Please check your email to reset password!");
          setErrorMessage("");
        })
        .catch((err) => {
          console.error(err);
          setErrorMessage(err.message);
        });
    } else {
      setErrorMessage("Please provide an valid email");
    }
  };

  // add google user
  const handleGoogleUser = () => {
    googleUser()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // set jwt token
        jwtToken(user);
        // End jwt token
        setErrorMessage("");
        navigate(from, { replace: true });
        toast.success(
          "Account has been registered successfully through Google!",
          {
            autoClose: 2000,
          }
        );
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
      });
  };

  // add facebook user
  const handleFacebookUser = () => {
    facebookUser()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // set jwt token
        jwtToken(user);
        // End jwt token
        setErrorMessage("");
        navigate(from, { replace: true });
        toast.success(
          "Account has been registered successfully through Facebook!",
          {
            autoClose: 2000,
          }
        );
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
      });
  };

  return (
    <div className="mt-36 mb-24 flex justify-center">
      <div className="w-96 bg-white rounded-sm shadow-xl p-4 sm:p-6 md:p-8">
        <form onSubmit={handleLogin}>
          <h5 className="text-2xl text-center font-semibold text-green-700 mb-4">
            Log in to the website
          </h5>
          <div>
            {errorMessage && (
              <p className="text-sm text-red-500 mb-6 text-center">
                Error: {errorMessage}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email <span className="text-red-700">*</span>
            </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              name="email"
              id="email"
              className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
              placeholder="valid email"
              required
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password <span className="text-red-700">*</span>
            </label>
            <div className="relative">
              <input
                type={isPassVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="******"
                className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                required
              />
              <div
                onClick={() => setISPassVisible(!isPassVisible)}
                className="absolute bottom-3.5 right-2 text-lg text-gray-900"
              >
                {isPassVisible ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>
          <div className="mb-6">
            <button
              onClick={handleResetPass}
              type="button"
              className="text-sm font-medium text-green-700 hover:text-gray-500 hover:underline"
            >
              Lost Password?
            </button>
          </div>
          <div className="relative">
            <button
              type="submit"
              className="w-full text-white bg-green-700 hover:bg-green-800 transition duration-300 font-medium px-3 py-2 text-center"
            >
              Login
            </button>
            {isLoading && (
              <div className="absolute bottom-2 left-24 w-6 h-6 border-2 border-dashed rounded-full animate-spin border-gray-200"></div>
            )}
          </div>
          <div className="flex items-center pt-4 space-x-1 mt-4">
            <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
            <p className="px-3 text-sm font-medium text-gray-900">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleUser}
              aria-label="Log in with Google"
              className="p-3 text-xl text-gray-900 hover:text-green-700"
            >
              <FaGoogle />
            </button>
            <button
              onClick={handleFacebookUser}
              aria-label="Log in with Facebook"
              className="p-3 text-xl text-gray-900 hover:text-green-700"
            >
              <FaFacebookF />
            </button>
          </div>

          <div className="text-sm font-medium text-gray-900 mt-4 text-center">
            Not registered?{" "}
            <Link
              to="/signup"
              className="text-sm font-medium text-green-700 hover:text-gray-500 hover:underline"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
