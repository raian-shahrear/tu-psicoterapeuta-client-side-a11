import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../Resources/headerImg/doctor.svg";

const HeaderOfHome = () => {
  return (
    <div>
      <section className="bg-gray-200 text-gray-700">
        <div className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0 flex flex-col justify-center items-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center py-16 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              <p>Hello! I'm your</p>
              <p className="text-green-700 mt-3">Dr. Amir Hossain</p>
            </h1>
            <div className="mt-6 mb-8 text-lg sm:mb-12">
              <p>
                I am a psychotherapist and my goal is to partner with you to
                enhance the quality of your life.
              </p>
              <p>
                Whether you are dealing with something specific or are seeking
                increased satisfaction and balance in life, I’m here to help.
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#appointment"
                className="px-8 py-3 text-lg font-semibold bg-green-700 text-white border-2 border-transparent transition duration-300 hover:bg-transparent hover:border-green-700 hover:text-green-700"
              >
                Book An Appointment
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center py-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-[450px]">
            <img
              src={img1}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-[450px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderOfHome;
