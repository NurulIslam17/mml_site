import React from "react";
import lunchImg from "../assets/images/lunch.jpg";

const Lunch = () => {
  return (
    <>
      <div className="mt-10 p-3 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img
                src={lunchImg}
                className="w-full h-auto object-cover"
                alt=""
                srcset=""
              />
            </div>

            <div className="-order-1 md:order-1">
              <h2 className="text-2xl font-edu font-bold text-[#eb2f06]">
                Lunch
              </h2>
              <p className="font-edu text-justify text-xl md:text-2xl">
                Enjoy a flavorful lunch with our diverse menu, featuring fresh
                salads, sandwiches, burgers, and hearty main courses. Whether
                you're in the mood for something light or a filling meal, we’ve
                got options to satisfy every craving. Dine in or order online
                for a convenient and delicious lunch!
              </p>

              <div className="mt-5 font-edu grid grid-cols-2 md:grid-cols-4 text-xl md:text-lg">
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full">
                    {" "}
                  </div>
                  <span className="text-xl">Sandwiches</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full">
                    {" "}
                  </div>
                  <span className="text-xl">Burgers</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full">
                    {" "}
                  </div>
                  <span className="text-xl">Rice</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full">
                    {" "}
                  </div>
                  <span className="text-xl">Meat</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full">
                    {" "}
                  </div>
                  <span className="text-xl">Fish</span>
                </div>
                <div className="flex justify-left items-center mb-2">
                  <div className="h-3 w-3 me-3 bg-[#eb2f06] rounded-full">
                    {" "}
                  </div>
                  <span className="text-xl">Salads</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Lunch;
