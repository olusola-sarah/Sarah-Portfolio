import React from "react";
import profileImg from "./Assets/profileImg.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-row justify-center items-center pt-10 px-4 md:px-0">
      {" "}
      <div className="w-full md:w-2/3 flex flex-col">
        {" "}
        {/*Main container*/}
        <div className="flex flex-row items-center">
          {" "}
          <div className="flex flex-col items-start mr-4">
            {" "}
            {/*Text Container*/}
            <h1 className="text-2xl md:text-5xl font-bold mb-1">
              Hi, I'm Sarah 👋
            </h1>{" "}
            <h2 className="text-lg md:text-2xl font-semibold">
              Frontend Developer. I love creating things and building nice
              interfaces.
            </h2>
          </div>
          <div className="relative flex shrink-0 overflow-hidden rounded-full w-20 h-20 md:w-32 md:h-32">
            {" "}
            <img
              src={profileImg}
              alt="Olusola Sarah"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-left w-full mt-4">
          {" "}
          {/*About Section*/}
          <h2 className="text-xl md:text-2xl font-semibold">About</h2>
          <h4 className="text-sm md:text-base font-light leading-relaxed">
            Result-oriented Junior-level Front-End Developer with strong
            problem-solving skills and a keen focus on technology and
            user-centric design. Possesses a solid understanding of front-end
            technologies and design principles, with the ability to contribute
            effectively in dynamic team environments.
          </h4>
        </div>
        <div className="mt-5">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;