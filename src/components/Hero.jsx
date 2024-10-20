import React from "react";
import HeroImg from "../assets/images/banner1.PNG";
import HeroMobileImg from "../assets/images/mobile_banner.PNG";

const Hero = () => {
  return (
    <>
      <div className="">
        <img src={HeroImg} className="w-full h-auto object-cover" alt="Hero" />
      </div>
      <div className="hidden">
        <img
          src={HeroMobileImg}
          className="w-full h-[100px] object-cover"
          alt="Mobile Hero"
        />
      </div>
    </>
  );
};

export default Hero;
