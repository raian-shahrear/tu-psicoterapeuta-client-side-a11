import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Contexts/AuthContext";

const SignUp = () => {
  const { createUser, updateUser, googleUser, facebookUser } =
    useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);
  const navigate = useNavigate();

  // Create an account
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imageURL = form.imgUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    // using Regex for email verification
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      setErrorMessage("Please set email in right format");
      return;
    }
    // using Regex for password verification
    if (!/^(?=.*[A-Z])/.test(password)) {
      setErrorMessage("Password should have at least one capital letter");
      return;
    }
    if (!/^(?=.*\d)/.test(password)) {
      setErrorMessage("Password should have at least one digit");
      return;
    }
    if (!/^(?=.*[!#$%&@? "])/.test(password)) {
      setErrorMessage("Password should have at least one special characters");
      return;
    }
    if (!/^(?=.{6,})/.test(password)) {
      setErrorMessage("Password should have at least 6 characters");
      return;
    }
    setErrorMessage("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        updateUserInfo(name, imageURL);
        setErrorMessage("");
        navigate("/");
        toast.success("Account has been registered successfully!!!", {
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
      });
  };

  // update user info
  const updateUserInfo = (name, imageURL) => {
    updateUser(name, imageURL)
      .then(() => {
        console.log("name and image URL are added");
        setErrorMessage("");
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
      });
  };

  // add google user
  const handleGoogleUser = () => {
    googleUser()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setErrorMessage("");
        navigate("/");
        toast.success(
          "Account has been registered successfully through Google!!!",
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
        setErrorMessage("");
        navigate("/");
        toast.success(
          "Account has been registered successfully through Facebook!!!",
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
        <form onSubmit={handleRegistration}>
          <h5 className="text-2xl text-center font-semibold text-green-700 mb-4">
            Register an account
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
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
              placeholder="first / last"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="url"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Image URL <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="imgUrl"
              id="url"
              className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
              placeholder="photo link..."
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
              placeholder="valid email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password <span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <input
              onChange={(e) => setActiveBtn(!activeBtn)}
              type="checkbox"
              name="terms"
              id="terms"
              value={activeBtn}
              className="focus:ring-green-700 bg-gray-300 border-transparent"
            />
            <label
              htmlFor="terms"
              className="text-sm ml-2 font-medium text-gray-900"
            >
              Agree with our Term & Conditions?
            </label>
          </div>
          <button
            type="submit"
            disabled={!activeBtn}
            title={
              activeBtn ? undefined : "Please check the terms & conditions box"
            }
            className="w-full text-white bg-green-700 disabled:bg-green-700 hover:bg-green-800 transition duration-300 font-medium px-3 py-2 text-center"
          >
            Register
          </button>

          <div className="flex items-center pt-4 space-x-1 mt-4">
            <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
            <p className="px-3 text-sm font-medium text-gray-900">
              Register with social accounts
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
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-sm font-medium text-green-700 hover:text-gray-500 hover:underline"
            >
              Go to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
