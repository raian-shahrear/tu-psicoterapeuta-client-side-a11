import React from "react";
import cover from "../../../Resources/headerImg/happyCover.svg";

const MiddleBanner = () => {
  return (
    <div className="custom-banner relative">
      <div className="custom-overly absolute top-0">
        <img src={cover} alt="cover" className="w-[820px] absolute -top-4 hidden md:block" />
        <h4 className="text-white font-semibold text-4xl relative top-[250px] left-10 md:left-[370px] lg:left-[400px]">
          Are You Ready To <br />
          Transform Your Life?
        </h4>
      </div>
    </div>
  );
};

export default MiddleBanner;
