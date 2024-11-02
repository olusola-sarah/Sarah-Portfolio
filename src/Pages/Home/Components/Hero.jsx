// Hero.js

import React from "react";
import profileImg from "./Assets/profileImg.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="w-full md:w-2/3 flex flex-col items-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row mb-6 items-center">
          <div className="flex flex-col items-start mb-4 md:mb-0 md:mr-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-1">
              Hi, I'm Sarah 👋{" "}
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold">
              Frontend Developer. I love creating things and building nice
              interfaces.
            </h2>
          </div>
          <img
            src={profileImg}
            alt="Olusola Sarah"
            className="w-32 h-32 md:w-52 md:h-52 rounded-full"
          />
        </div>

        <div className="text-left w-full mb-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">About</h2>
          <h3 className="text-sm md:text-base font-light leading-relaxed">
            Result-oriented Junior-level Front-End Developer with strong
            problem-solving skills and a keen focus on technology and
            user-centric design. Possesses a solid understanding of front-end
            technologies and design principles, with the ability to contribute
            effectively in dynamic team environments.
          </h3>
        </div>

        <div className="mt-5">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
