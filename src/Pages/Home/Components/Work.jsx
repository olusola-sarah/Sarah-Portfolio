import React, { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

// Sample work experience data
const workExperiences = [
  {
    company: "GoLearn",
    position: "Lead Front-end Developer",
    duration: "February 2024 - Present",
    description:
      "Serving as the Lead Front-End Developer at Golearn, an online learning web app startup. Leading the development of user interfaces, ensuring a seamless and engaging user experience. Collaborated with cross-functional teams to design and implement new features, driving the platform’s growth and user engagement. Mentored junior developers and maintained high standards of code quality and performance.",
    logo: "https://via.placeholder.com/40",
  },
  {
    company: "Ogenki",
    position: "Front-end Developer",
    duration: "January 2024 - Present",
    description:
      "Working as a Front-End Developer at Ogenki, a promising startup, where I was responsible for building and enhancing user interfaces. Collaborated with the design and development teams to create responsive and visually appealing web applications. Played a key role in improving user experience and implementing new features to support the company’s growth.",
    logo: "https://via.placeholder.com/40",
  },
  {
    company: "SwiftAboki",
    position: "Front-end Developer (Contract)",
    duration: "January 2023 - October 2023",
    description:
      "Worked on a short-term contract to enhance the Swift Aboki website’s responsiveness on mobile devices. Optimized the site’s design and functionality for various screen sizes, ensuring a seamless user experience across all devices.",
    logo: "https://via.placeholder.com/40",
  },
];

const Work = () => {
  const [openDescription, setOpenDescription] = useState(null);

  const toggleDescription = (index) => {
    setOpenDescription(openDescription === index ? null : index);
  };

  return (
    <div className="w-2/3 mx-auto">
      <h2 className="text-xl font-bold mb-6">Work Experience</h2>
      {workExperiences.map((experience, index) => (
        <div key={index} className="flex mb-8 items-start group">
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center">
              <div className="flex items-center relative">
                <h3 className="text-sm font-semibold">{experience.company}</h3>

                {/* Animated dropdown button with React icon */}
                <HiChevronRight
                  className={`ml-2 text-gray-800 focus:outline-none transform transition-transform duration-200 absolute left-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out ${
                    openDescription === index ? "rotate-90" : "rotate-0"
                  }`}
                  size={16} // Smaller size
                  onClick={() => toggleDescription(index)}
                  aria-label="Toggle Description"
                  style={{ cursor: "pointer", fontWeight: "bold" }} // Bolder appearance
                />
              </div>
              <p className="text-gray-500 text-xs">{experience.duration}</p>
            </div>
            <p className="text-gray-600 text-xs">{experience.position}</p>

            {/* Toggleable description with smooth animation */}
            <div
              className={`text-gray-700 text-xs mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                openDescription === index ? "max-h-20" : "max-h-0"
              }`}
              style={{ transition: "max-height 0.3s ease-in-out" }}
            >
              {experience.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
