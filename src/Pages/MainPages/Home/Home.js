import React from "react";
import { Link } from "react-router-dom";
import HeaderOfHome from "./HeaderOfHome";
import prob1 from "../../../Resources/problems/anxiety.png";
import prob2 from "../../../Resources/problems/weigh-scale.png";
import prob3 from "../../../Resources/problems/no-smoking.png";
import prob4 from "../../../Resources/problems/depression.png";
import DisplayServices from "../../Others/DisplayServices";
import Appointment from "./Appointment";


const Home = () => {
  return (
    <div>
      <header>
        <HeaderOfHome />
      </header>

      <section className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0 mt-6 lg:-mt-16">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-24">
          <div className="bg-lime-100 flex flex-col items-center text-center p-6 rounded-sm">
            <img src={prob1} alt="prob1" className="w-16" />
            <p className="text-xl font-semibold mt-1">Anxiety</p>
            <p className="text-sm mt-3">Stop procrastinating and boost self-confidence today</p>
          </div>
          <div className="bg-green-100 flex flex-col items-center text-center p-6 rounded-sm">
            <img src={prob2} alt="prob2" className="w-16" />
            <p className="text-xl font-semibold mt-1">Obesity</p>
            <p className="text-sm mt-3">See how I can help you change your eating habits</p>
          </div>
          <div className="bg-emerald-100 flex flex-col items-center text-center p-6 rounded-sm">
            <img src={prob3} alt="prob3" className="w-16" />
            <p className="text-xl font-semibold mt-1">Smoking Cessation</p>
            <p className="text-sm mt-3">Quit smoking permanently with my services.</p>
          </div>
          <div className="bg-teal-100 flex flex-col items-center text-center p-6 rounded-sm">
            <img src={prob4} alt="prob4" className="w-16" />
            <p className="text-xl font-semibold mt-1">Post Trauma</p>
            <p className="text-sm mt-3">I respect my patients' secret and can help them to recover from PTSD</p>
          </div>
        </div>
      </section>

      <section className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0 mt-12 lg:mt-20">
        <h2 className="text-4xl font-semibold text-green-700 mb-6">How I Care</h2>
        <DisplayServices />
        <div className="mt-10">
        <Link
                rel="noopener noreferrer"
                to="/all-services"
                className="px-8 py-3 text-lg font-semibold bg-green-700 text-white border-2 transition duration-300 hover:bg-green-800"
              >
                View All
              </Link>
        </div>
      </section>

      <section className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0 mt-12 lg:mt-16">
        <h2 className="text-4xl font-semibold text-green-700 mb-2">Request Appointment</h2>
        <Appointment />
      </section>

    </div>
  );
};

export default Home;
