import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ServiceSection = ({ service }) => {
  const {
    serviceName,
    serviceImg,
    servicePrice,
    serviceRating,
    serviceMedium,
    serviceDuration,
    serviceDetails,
  } = service;

  return (
    <div>
      <div className="relative">
        <img
          src={serviceImg}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-gray-900">
          <svg
            className="absolute inset-x-0 -bottom-1 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans font-bold tracking-tight text-white text-4xl sm:leading-none">
                  {serviceName}
                </h2>
                <p className="max-w-xl mb-4 text-base text-justify text-gray-200 md:text-lg">
                  {serviceDetails}
                </p>
                <Link
                  to="/all-services"
                  aria-label=""
                  className="inline-flex gap-2 items-center font-semibold text-lg tracking-wider transition-colors duration-200 text-green-400 hover:text-green-700"
                >
                  <FaAngleLeft />
                  Go back to services
                </Link>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-gray-300 rounded-sm shadow-gray-400 shadow-2xl p-7 sm:p-10 grid grid-cols-5">
                  <ul className="flex flex-col gap-4 text-xl font-semibold capitalize col-span-2">
                    <li>Level:</li>
                    <li>Medium:</li>
                    <li>Duration:</li>
                    <li>Ratings:</li>
                    <li>Price:</li>
                  </ul>
                  <ul className="flex flex-col gap-4 text-xl font-semibold capitalize col-span-3">
                    <li>All Levels</li>
                    <li>{serviceMedium}</li>
                    <li>{serviceDuration}</li>
                    <li className="flex items-center gap-1 text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                      <span className="ml-2">{serviceRating}</span>
                    </li>
                    <li>{servicePrice}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
