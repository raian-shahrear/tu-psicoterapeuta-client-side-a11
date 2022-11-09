import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="mt-36 mb-24 flex justify-center">
      <div class="w-96 bg-white rounded-sm shadow-xl p-4 sm:p-6 md:p-8">
        <form>
          <h5 class="text-2xl text-center font-semibold text-green-700 mb-6">
            Register an account
          </h5>
          <div className="mb-4">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              class="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
              placeholder="first / last"
              required
            />
          </div>
          <div className="mb-4">
            <label
              for="url"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Image URL
            </label>
            <input
              type="text"
              name="imgUrl"
              id="url"
              class="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
              placeholder="photo link..."
              required
            />
          </div>
          <div className="mb-4">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
              placeholder="valid email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              class="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-green-700 hover:bg-green-800 transition duration-300 font-medium px-3 py-2 text-center"
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
              aria-label="Log in with Google"
              className="p-3 text-xl text-gray-900 hover:text-green-700"
            >
              <FaGoogle />
            </button>
            <button
              aria-label="Log in with Facebook"
              className="p-3 text-xl text-gray-900 hover:text-green-700"
            >
              <FaFacebookF />
            </button>
          </div>

          <div class="text-sm font-medium text-gray-900 mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              class="text-sm font-medium text-green-700 hover:text-gray-500 hover:underline"
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
