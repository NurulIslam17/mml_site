import React from "react";
import dinnerImg from "../assets/images/dinner_2.jpg";

const Dinner = () => {
  return (
    <>
      <div className="p-3 mt-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font[RubikMonoOne] font-bold text-[#eb2f06]">
                Dinner
              </h2>
              <p className="font-edu text-xl text-justify md:text-2xl">
                Indulge in a delightful dinner with our carefully curated menu,
                offering a variety of options including juicy steaks, savory
                pasta, fresh seafood, and more. Whether you’re craving a light
                bite or a hearty feast, we have something for everyone. Dine in
                or order online for a memorable evening meal!
              </p>

              <div className="mt-5 font-edu grid grid-cols-2 md:grid-cols-3 text-xl md:text-lg">
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full">
                    {" "}
                  </div>
                  <span className="text-xl">Juicy Steaks</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full">
                    {" "}
                  </div>
                  <span className="text-xl">Savory Pasta</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full">
                    {" "}
                  </div>
                  <span className="text-xl">Fresh Seafood</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full">
                    {" "}
                  </div>
                  <span className="text-xl">Sweets</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full">
                    {" "}
                  </div>
                  <span className="text-xl">Fruit</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src={dinnerImg}
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

export default Dinner;
