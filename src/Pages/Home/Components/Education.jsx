import React from "react";

// Sample education experience data
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
    <div className="w-2/3 mx-auto">
      <h2 className="text-xl font-bold mb-6">Education</h2>
      {educationExperiences.map((education, index) => (
        <div key={index} className="flex mb-8 items-start">
          <img
            src={education.logo}
            alt={`${education.school} logo`}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold">{education.school}</h3>
              <p className="text-gray-500 text-xs">{education.duration}</p>
            </div>
            <p className="text-gray-600 text-xs mt-1">{education.degree}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
