import React from "react";
import HeaderOfHome from "./HeaderOfHome";
import prob1 from "../../../Resources/problems/anxiety.png";
import prob2 from "../../../Resources/problems/weigh-scale.png";
import prob3 from "../../../Resources/problems/no-smoking.png";
import prob4 from "../../../Resources/problems/depression.png";


const Home = () => {
  return (
    <div>
      <header>
        <HeaderOfHome />
      </header>
      <section className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0 mt-20">
        <h2 className="text-4xl font-semibold text-green-700 mb-6">If you have any of these...</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-24">
          <div className="bg-green-100 flex flex-col items-center text-center p-6 rounded-sm">
            <img src={prob1} alt="prob1" className="w-16" />
            <p className="text-xl font-semibold mt-1">Anxiety</p>
            <p className="text-sm mt-3">Stop procrastinating and boost self-confidence today</p>
          </div>
          <div className="bg-blue-100 flex flex-col items-center text-center p-6 rounded-sm">
            <img src={prob2} alt="prob2" className="w-16" />
            <p className="text-xl font-semibold mt-1">Obesity</p>
            <p className="text-sm mt-3">See how I can help you change your eating habits</p>
          </div>
          <div className="bg-yellow-100 flex flex-col items-center text-center p-6 rounded-sm">
            <img src={prob3} alt="prob3" className="w-16" />
            <p className="text-xl font-semibold mt-1">Smoking Cessation</p>
            <p className="text-sm mt-3">Quit smoking permanently with my services.</p>
          </div>
          <div className="bg-red-100 flex flex-col items-center text-center p-6 rounded-sm">
            <img src={prob4} alt="prob4" className="w-16" />
            <p className="text-xl font-semibold mt-1">Post Trauma</p>
            <p className="text-sm mt-3">I respect my patients' secret and can help them to recover from PTSD</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
