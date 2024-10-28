import React from "react";

// Sample work experience data
const workExperiences = [
  {
    company: "GoLearn",
    position: "Lead Front-end Developer",
    duration: "February 2024 - present",
    description:
      "Serving as the Lead Front-End Developer at Golearn, an online learning web app startup. Leading the development of user interfaces, ensuring a seamless and engaging user experience. Collaborated with cross-functional teams to design and implement new features, driving the platform’s growth and user engagement. Mentored junior developers and maintained high standards of code quality and performance.",
    logo: "https://via.placeholder.com/40", // Replace with actual logo URL or local path
  },
  {
    company: "Ogenki",
    position: "Front-end Developer",
    duration: "January 2024 - Present",
    description:
      "Working as a Front-End Developer at Ogenki, a promising startup, where I was responsible for building and enhancing user interfaces. Collaborated with the design and development teams to create responsive and visually appealing web applications. Played a key role in improving user experience and implementing new features to support the company’s growth.",
    logo: "https://via.placeholder.com/40", // Replace with actual logo URL or local path
  },
  {
    company: "SwiftAboki",
    position: "Front-end Developer (Contract)",
    duration: "January 2023 - October 2023",
    description:
      "Worked on a short-term contract to enhance the Swift Aboki website’s responsiveness on mobile devices. Optimized the site’s design and functionality for various screen sizes, ensuring a seamless user experience across all devices.",
    logo: "https://via.placeholder.com/40", // Replace with actual logo URL or local path
  },
];

const Work = () => {
  return (
    <div className="w-2/3 mx-auto p-4"> {/* Updated width to max-w-3xl */}
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      {workExperiences.map((experience, index) => (
        <div key={index} className="flex mb-8 items-start">
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex justify-between w-full">
            <div>
              <h3 className="text-xs font-semibold">{experience.company}</h3>
              <p className="text-gray-600 text-xs">{experience.position}</p>
              <p className="text-gray-700 text-xs mt-2">{experience.description}</p>
            </div>
            <p className="text-gray-500 text-xs text-right">
              {experience.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
