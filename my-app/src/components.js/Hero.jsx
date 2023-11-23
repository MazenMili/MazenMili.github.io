import React from "react";
import Animation from "./Animation";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="md:text-7xl sm:text-6xl text-4xl text-[#00df9a] font-bold p-2 md:py-6 ">
          Hello, I'm
        </p>
        <div className="text-white font-bold p-2 md:text-7xl sm:text-6xl text-4xl md:py-6">
          <Animation />
        </div>
        <p className="md:text-2xl sm:text-2xl text-xl text-gray-400 p-2">
          Passionate about Creating Innovative Web Solutions
        </p>
      </div>
    </div>
  );
};

export default Hero;
