import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const DisplayServices = ({service}) => {
  const {_id, serviceName, serviceImg, servicePrice, serviceRating, serviceDetails} = service;

  return (
    <div>
      <div className="bg-white rounded-sm border border-gray-200 shadow-md">
        <img
          className="rounded-t-sm h-96 w-full"
          src={serviceImg}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {serviceName}
          </h5>
          <p className="mb-3 font-medium text-gray-700">
            {serviceDetails.length > 100 ? serviceDetails.slice(0, 99)+"..." : serviceDetails}
          </p>
          <div className="flex justify-between mb-6">
            <p className="font-semibold text-lg">Price: {servicePrice}</p>
            <p className="font-semibold text-lg text-yellow-400 flex items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <span className="ml-2">{serviceRating}</span>
            </p>
          </div>
          <Link
            to={`/service-details/${_id}`}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-green-700 border-2 border-green-700 bg-transparent hover:bg-green-700 hover:text-white hover:border-transparent"
          >
            See Details
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayServices;
