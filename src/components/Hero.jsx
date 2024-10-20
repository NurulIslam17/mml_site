import React from "react";
import HeroImg from "../assets/images/banner1.PNG";
import HeroMobileImg from "../assets/images/mobile_banner.PNG";

const Hero = () => {
  return (
    <>
      <div className="hidden md:block mb-5">
        <img src={HeroImg} className=" w-full h-[100px] object-cover" alt="Hero" />
      </div>
      <div className="block md:hidden mb-5">
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
