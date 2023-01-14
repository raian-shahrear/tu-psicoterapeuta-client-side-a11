import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Contexts/AuthContext";
import useTitle from "../../Hooks/useTitle";

const SignUp = () => {
  useTitle("Register");
  const { createUser, updateUser, googleUser, facebookUser, signOutUser } =
    useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPassVisible, setISPassVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Create an account
  const handleRegistration = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const password = form.password.value;

    // using Regex for email verification
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      setErrorMessage("Please set email in right format");
      setIsLoading(false);
      return;
    }
    // using Regex for password verification
    if (!/^(?=.*[A-Z])/.test(password)) {
      setErrorMessage("Password should have at least one capital letter");
      setIsLoading(false);
      return;
    }
    if (!/^(?=.*\d)/.test(password)) {
      setErrorMessage("Password should have at least one digit");
      setIsLoading(false);
      return;
    }
    if (!/^(?=.*[!#$%&@? "])/.test(password)) {
      setErrorMessage("Password should have at least one special characters");
      setIsLoading(false);
      return;
    }
    if (!/^(?=.{6,})/.test(password)) {
      setErrorMessage("Password should have at least 6 characters");
      setIsLoading(false);
      return;
    }
    setErrorMessage("");

    const imageHostKey = process.env.REACT_APP_IMGBB_KEY;
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData?.success) {
          // create user
          createUser(email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              form.reset();
              updateUserInfo(name, imgData?.data?.url);
              setErrorMessage("");
              navigate("/login");
              signOutUser();
              toast.success(
                "Account has been registered successfully! Please login again!",
                {
                  autoClose: 2000,
                }
              );
            })
            .catch((err) => {
              console.error(err);
              setErrorMessage(err.message);
              setIsLoading(false);
            });
        }
      });
  };

  // update user info
  const updateUserInfo = (name, imageURL) => {
    updateUser(name, imageURL)
      .then(() => {
        console.log("name and image are added");
        setErrorMessage("");
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
        setIsLoading(false);
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
        setErrorMessage("");
        navigate("/");
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
        <form onSubmit={handleRegistration}>
          <h5 className="text-2xl text-center font-semibold text-green-700 mb-4">
            Register an account
          </h5>
          <div>
            {errorMessage && (
              <p className="text-sm text-red-500 mb-6 text-center">
                {errorMessage}
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
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Upload Photo <span className="text-red-700">*</span>
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full"
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
            <p className="text-gray-400 font-semibold">
              <small>
                [password: at least 1 uppercase, 1 number, 1 special character
                and 6 letters long]
              </small>
            </p>
          </div>
          <div className="mb-6">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              value="agree-terms"
              required
              className="focus:ring-green-700 bg-gray-300 border-transparent"
            />
            <label
              htmlFor="terms"
              className="text-sm ml-2 font-medium text-gray-900"
            >
              Agree with our Term & Conditions?
            </label>
          </div>
          <div className="relative">
            <button
              type="submit"
              className="w-full text-white bg-green-700 hover:bg-green-800 transition duration-300 font-medium px-3 py-2 text-center"
            >
              Register
            </button>
            { isLoading &&
              <div className="absolute bottom-2 left-24 w-6 h-6 border-2 border-dashed rounded-full animate-spin border-gray-200"></div>
            }
          </div>
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
              aria-label="sign up with Google"
              className="p-3 text-xl text-gray-900 hover:text-green-700"
            >
              <FaGoogle />
            </button>
            <button
              onClick={handleFacebookUser}
              aria-label="sign up with Facebook"
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
