import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../logo.png";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { FaYoutube } from "react-icons/fa";


const Footer = () => {

  const handleSubscribe = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    if(email){
      toast.success('Thanks for subscribe', {autoClose: 2000})
      event.target.reset();
    }
  }

  return (
    <div className="relative mt-16 bg-deep-purple-accent-400">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-200"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 bg-gray-200 md:px-24 lg:px-0">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6 lg:w-11/12 mx-auto">
          <div className="md:max-w-md lg:col-span-2">
            <Link
              to="/"
              title="Tu Psicoterapeuta"
              className="inline-flex items-center lg:mx-auto"
            >
              <img src={logo} alt="logo" className="w-20" />
              <div className="ml-2 tracking-wide text-gray-800 capitalize">
                <p className="text-2xl font-bold custom-logo">
                  Tu Psicoterapeuta
                </p>
                <p className="font-semibold -mt-1">
                  <small>Dr. Amir Ahmad</small>
                </p>
              </div>
            </Link>
            <div className="lg:max-w-sm">
              <p className="text-lg text-gray-700 font-semibold">
                A Reliable Mental-Health Service
              </p>
              <p className="mt-6 text-sm text-gray-600">
                We help people by psycho therapy, quitting bad habit, stopping
                anxiety & depression and even for physical health.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-gray-700">Menu</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm tracking-wide text-green-700"
                        : "text-sm tracking-wide text-gray-600 hover:text-green-700 transition duration-300"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/all-services"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm tracking-wide text-green-700"
                        : "text-sm tracking-wide text-gray-600 hover:text-green-700 transition duration-300"
                    }
                  >
                    All Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm tracking-wide text-green-700"
                        : "text-sm tracking-wide text-gray-600 hover:text-green-700 transition duration-300"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-service"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm tracking-wide text-green-700"
                        : "text-sm tracking-wide text-gray-600 hover:text-green-700 transition duration-300"
                    }
                  >
                    Add Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-review"
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm tracking-wide text-green-700"
                        : "text-sm tracking-wide text-gray-600 hover:text-green-700 transition duration-300"
                    }
                  >
                    My Review
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-700">
                All Services
              </p>
              <ul className="mt-2 space-y-3">
                <li className="text-sm tracking-wide text-gray-600">
                    Depression & Insomnia
                </li>
                <li className="text-sm tracking-wide text-gray-600">
                    Career Counseling
                </li>
                <li className="text-sm tracking-wide text-gray-600">
                    Relationship Issues
                </li>
                <li className="text-sm tracking-wide text-gray-600">
                  Child Psychology
                </li>
                <li className="text-sm tracking-wide text-gray-600">
                  Physical Health
                </li>
              </ul>
            </div>
            <div className="md:max-w-md lg:col-span-2">
              <p className="font-semibold tracking-wide text-gray-700">
                Newsletter
              </p>
              <div className="mt-2">
                <p className="text-sm text-gray-600">
                  Say Good Bye to Anxiety or If Need Any Counselling, Please Subscribe
                </p>
                <form onSubmit={handleSubscribe} className="mt-6">
                  <input type="email" name="email" placeholder="your email" className="w-full py-2 px-3 border-transparent focus:ring-1 focus:outline-none focus:ring-green-700" required />
                  <input type="submit" value="Subscribe" className="mt-4 bg-green-700 text-white py-2 px-3 cursor-pointer transition duration-300 hover:bg-green-800" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-11/12 mx-auto flex flex-col justify-between pt-5 pb-10 border-t border-gray-300 sm:flex-row">
          <p className="text-gray-600 text-sm">
            © Copyright 2022 <span className="custom-logo">Tu Psicoterapeuta.</span> All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://twitter.com/login"
              target="_break"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_break"><FaYoutube className="text-2xl" /></a>
            <a
              href="https://www.instagram.com/accounts/login/"
              target="_break"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/login/"
              target="_break"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
