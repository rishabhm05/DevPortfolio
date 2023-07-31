import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
const Hero = () => {
  return (
    <div id="hero" className="w-full mx-auto  bg-[#14182c]">
      <div className="flex  flex-col justify-center items-center mx-4 py-40">
        <h1 className="text-white text-4xl font-bold text-center">
          Hi I'm {"  "}
          <span className="text-[#ADD8E6] text-3xl underline"> Rishabh</span>
        </h1>
        <p className="text-white text-3xl my-4 text-center font-bold uppercase">
          Front End Engineer
        </p>
        <p className="text-gray-400 text-center text-md my-4">
          Currently Working at William Oneil India .<br></br>My day to day task involve building Great User Interface using library like React Js.<br></br>Around 1.5 Years of Experience in building Responsive WebApps.
        </p>
        <div className="flex flex-row gap-3 justify-start">
          <div>
            <a href="/RishabhMehta_Resume.pdf" download>
              <button className=" bg-[transparent] group flex items-center border-white border-2 px-6 py-2 rounded text-white my-6 hover:bg-pink-500 hover:border-pink-500">
                {" "}
                Resume{" "}
                <span className="group-hover:rotate-90 duration-100">
                  {" "}
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
