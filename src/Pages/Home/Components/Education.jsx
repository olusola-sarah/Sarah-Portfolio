import React from "react";

const educationExperiences = [
  {
    school: "Federal University of Agriculture, Abeokuta",
    degree: "Bachelor of Science in Physics",
    duration: "2018 - 2023",
    logo: "https://via.placeholder.com/40",
  },
  {
    school: "HNG Internship",
    degree: "Frontend Development Certificate",
    duration: "2022 - 2022",
    logo: "https://via.placeholder.com/40",
  },
];

const Education = () => {
  return (
    <div className="w-full md:w-2/3 mx-auto px-4 md:px-0">
      <h2 className="text-lg md:text-xl font-bold mb-6 text-left">Education</h2>
      {educationExperiences.map((education, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div className="flex items-center w-full">
            <img
              src={education.logo}
              alt={`${education.school} logo`}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-4"
            />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-sm md:text-base font-semibold">
                  {education.school}
                </h3>
                {/* Duration aligned to the right */}
                <p className="text-xs md:text-sm text-gray-500 ml-4 md:ml-8">
                  {education.duration}
                </p>
              </div>
              <p className="text-xs md:text-sm text-gray-500">
                {education.degree}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
