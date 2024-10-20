import React from "react";
import breakfastImg from "../assets/images/breakfast _2.jpg";

const Breakfast = () => {
  return (
    <>
      <div className="p-3 mt-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-center mb-10 font-bold text-[#b6391a]">What we offer...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font[RubikMonoOne] font-bold text-[#eb2f06]">
                Breakfast
              </h2>
              <p className="font[Ubuntu]  text-xl text-justify md:text-lg">
                Start your day with our delicious breakfast menu, featuring
                fresh and flavorful options like pancakes, scrambled eggs,
                smoothies, and fruit bowls and etc. Whether you prefer something light
                or a hearty meal, we have the perfect dish. Enjoy in-house or
                order online for a satisfying start to your day!
              </p>

              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 text-xl md:text-lg">
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full"> </div>
                  <span>Egg</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full"> </div>
                  <span>Bread</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full"> </div>
                  <span>Pancakes</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full"> </div>
                  <span>Smoothies</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full"> </div>
                  <span>Fruit</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full"> </div>
                  <span>Eggs</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src={breakfastImg}
                className="w-full h-auto object-cover"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breakfast;
