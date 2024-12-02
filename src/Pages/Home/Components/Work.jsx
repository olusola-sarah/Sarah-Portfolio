import React, { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

// Sample work experience data
const workExperiences = [
  {
    company: "PickMeUp Innovations",
    position: "Front-end Developer",
    duration: "December 2023 - Present",
    description:
      "Developing and optimizing user-friendly, dynamic web pages, improving site usability and customer engagement. Collaborating with cross-functional teams to brainstorm and implement strategies, resulting in tailored, user-specific designs that enhance overall user satisfaction. Ensuring seamless website performance across multiple browsers and platforms, contributing to a significant increase in cross-platform compatibility and a sharp reduction in website loading times.",
    logo: "https://via.placeholder.com/40",
  },
  {
    company: "GRAZAC Innovations",
    position: "Front-end Developer",
    duration: "May 2021 - Oct. 2021",
    description:
      "Efficiently used tools like JavaScript and CSS to create user-friendly interfaces for websites. Collaborated with other team members to create unique and specifically tailored websites.",
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
  {
    company: "SwiftAboki",
    position: "Front-end Developer (Contract)",
    duration: "January 2023 - October 2023",
    description:
      "Worked on a short-term contract to enhance the Swift Aboki website’s responsiveness on mobile devices. Optimized the site’s design and functionality for various screen sizes, ensuring a seamless user experience across all devices.",
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
    <div className="flex justify-center items-center pt-10">
      <div className="w-full md:w-2/3 mx-auto px-4 md:px-0">
        <h2 className="text-lg md:text-xl font-bold mb-6 text-left">
          Work Experience
        </h2>
        {workExperiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row mb-8 items-start group"
          >
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-10 h-10 rounded-full mr-4 mb-4 md:mb-0"
            />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center relative mb-2">
                  <h3 className="text-sm md:text-base font-semibold">
                    {experience.company}
                  </h3>

                  {/* Animated dropdown button with React icon */}
                  <HiChevronRight
                    className={`ml-2 text-gray-800 transform transition-transform duration-200 absolute left-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out ${
                      openDescription === index ? "rotate-90" : "rotate-0"
                    }`}
                    size={16}
                    onClick={() => toggleDescription(index)}
                    aria-label="Toggle Description"
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                  />
                </div>
                <p className="text-gray-500 text-xs md:text-sm">
                  {experience.duration}
                </p>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">
                {experience.position}
              </p>

              {/* Toggleable description with smooth animation */}
              <div
                className={`text-gray-700 text-xs md:text-sm mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                  openDescription === index ? "max-h-40" : "max-h-0"
                }`}
                style={{ transition: "max-height 0.3s ease-in-out" }}
              >
                {experience.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
