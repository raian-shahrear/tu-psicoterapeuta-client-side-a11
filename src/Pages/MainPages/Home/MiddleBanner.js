import React from "react";
import cover from "../../../Resources/headerImg/happyCover.svg";

const MiddleBanner = () => {
  return (
    <div className="custom-banner relative">
      <div className="custom-overly absolute top-0">
        <img src={cover} alt="cover" className="w-[820px] absolute -top-4 hidden md:block" />
        <h4 className="text-white w-96 font-semibold text-5xl md:text-4xl lg:text-5xl relative top-[250px] left-10 md:left-[370px] lg:left-[400px]">
          Are You Ready <br /> To Transform <br /> Your Life?
        </h4>
      </div>
    </div>
  );
};

export default MiddleBanner;
