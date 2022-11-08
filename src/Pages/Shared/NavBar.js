import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="px-4 py-1 md:px-24 lg:px-0 shadow-lg fixed top-0 w-full z-20 custom-nav">
        <div className="relative grid items-center grid-cols-2 lg:grid-cols-3 lg:w-11/12 mx-auto">
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "tracking-wide text-green-700 font-semibold"
                    : "font-semibold tracking-wide text-gray-700 hover:text-green-700 transition duration-300"
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
                    ? "tracking-wide text-green-700 font-semibold"
                    : "font-semibold tracking-wide text-gray-700 hover:text-green-700 transition duration-300"
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
                    ? "tracking-wide text-green-700 font-semibold"
                    : "font-semibold tracking-wide text-gray-700 hover:text-green-700 transition duration-300"
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
                    ? "tracking-wide text-green-700 font-semibold"
                    : "font-semibold tracking-wide text-gray-700 hover:text-green-700 transition duration-300"
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
                    ? "tracking-wide text-green-700 font-semibold"
                    : "font-semibold tracking-wide text-gray-700 hover:text-green-700 transition duration-300"
                }
              >
                My Review
              </NavLink>
            </li>
          </ul>
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
                <small>Dr. Amir Hossain</small>
              </p>
            </div>
          </Link>
          <ul className="items-center hidden ml-auto space-x-8 lg:flex">
            <li>
              <button>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold border-2 border-transparent py-2 px-3 bg-green-700 text-white"
                      : "font-semibold border-2 border-green-700 py-2 px-3 bg-transparent text-green-700 hover:bg-green-700 hover:text-white transition duration-300"
                  }
                >
                  Log In
                </NavLink>
              </button>
            </li>
            <li>
              <button className="font-semibold border-2 border-red-700 py-2 px-3 bg-transparent text-red-700 hover:bg-red-700 hover:text-white transition duration-300">
                Sign Out
              </button>
            </li>
          </ul>

          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white rounded shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
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
                            <small>Dr. Amir Hossain</small>
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/home"
                          onClick={() => setIsMenuOpen(false)}
                          className={({ isActive }) =>
                            isActive
                              ? "tracking-wide text-green-700 font-semibold"
                              : "font-semibold tracking-wide text-gray-700 hover:text-green-700 transition duration-300"
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/all-services"
                          onClick={() => setIsMenuOpen(false)}
                          className={({ isActive }) =>
                            isActive
                              ? "tracking-wide text-green-700 font-semibold"
                              : "font-semibold tracking-wide text-gray-700 hover:text-green-700 transition duration-300"
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
                              ? "tracking-wide text-green-700 font-semibold"
                              : "font-semibold tracking-wide text-gray-700 hover:text-green-700 transition duration-300"
                          }
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/add-service"
                          onClick={() => setIsMenuOpen(false)}
                          className={({ isActive }) =>
                            isActive
                              ? "tracking-wide text-green-700 font-semibold"
                              : "font-semibold tracking-wide text-gray-700 hover:text-green-700 transition duration-300"
                          }
                        >
                          Add Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/my-review"
                          onClick={() => setIsMenuOpen(false)}
                          className={({ isActive }) =>
                            isActive
                              ? "tracking-wide text-green-700 font-semibold"
                              : "font-semibold tracking-wide text-gray-700 hover:text-green-700 transition duration-300"
                          }
                        >
                          My Review
                        </NavLink>
                      </li>
                      <li>
                        <hr className="mb-8" />
                      </li>
                      <li>
                        <button>
                          <NavLink
                            to="/login"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                              isActive
                                ? "font-semibold border-2 border-transparent py-2 px-3 bg-green-700 text-white"
                                : "font-semibold border-2 border-green-700 py-2 px-3 bg-transparent text-green-700 hover:bg-green-700 hover:text-white transition duration-300"
                            }
                          >
                            Log In
                          </NavLink>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setIsMenuOpen(false)}
                          className="font-semibold border-2 border-red-700 py-2 px-3 bg-transparent text-red-700 hover:bg-red-700 hover:text-white transition duration-300"
                        >
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
