// Education.js

import React from "react";

const educationExperiences = [
  {
    school: "University of Example",
    degree: "Bachelor of Science in Computer Science",
    duration: "2018 - 2022",
    logo: "https://via.placeholder.com/40",
  },
  {
    school: "Example Coding Bootcamp",
    degree: "Full-Stack Web Development Certificate",
    duration: "2022 - 2022",
    logo: "https://via.placeholder.com/40",
  },
];

const Education = () => {
  return (
    <div className="w-full md:w-2/3 mx-auto px-4 md:px-0">
      <h2 className="text-lg md:text-xl font-bold mb-6">Education</h2>
      {educationExperiences.map((education, index) => (
        <div key={index} className="flex items-center mb-8">
          <img
            src={education.logo}
            alt={`${education.school} logo`}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-4"
          />
          <div className="flex flex-col">
            <h3 className="text-sm md:text-base font-semibold">
              {education.school}
            </h3>
            <p className="text-xs md:text-sm text-gray-500">
              {education.degree}
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              {education.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
