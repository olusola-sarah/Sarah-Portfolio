import React from "react";
import profileImg from "./Assets/profileImg.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="w-2/3 flex flex-col items-center">
        {/* Container for image, heading, and subheading */}
        <div className="flex mb-6">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl font-bold mb-1">Hi, I'm Sarah 👋 </h1>
            <h2 className="text-2xl font-semibold">
              Frontend Developer. I love creating things and building nice
              interfaces.
            </h2>
          </div>
          <img
            src={profileImg}
            alt="Olusola Sarah"
            className="w-52 h-32 rounded-full"
          />
        </div>

        {/* About Section */}
        <div className="text-left w-full mb-4">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <h3 className="text-xs font-light leading-relaxed">
            Result-oriented Junior-level Front-End Developer with strong
            problem-solving skills and a keen focus on technology and
            user-centric design. Possesses a solid understanding of front-end
            technologies and design principles, with the ability to contribute
            effectively in dynamic team environments. Combines a unique blend of
            technical expertise and innovative thinking to drive successful
            project outcomes. I seek to leverage these skills to contribute to
            innovative web development projects and enhance user experiences.
          </h3>
        </div>

        {/* Centered Button directly below Hero section */}
        <div className="mt-5">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
