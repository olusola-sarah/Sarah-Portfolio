import React from "react";
import resumeFile from "./Assets/Sarah Olusola's CV .pdf"; // Adjust path if needed

const Button = () => {
  return (
    <div className="flex justify-center items-center">
      <a
        href={resumeFile}
        download="Sarah_Resume.pdf" // Sets a default download file name
        className="relative bg-black text-white text-lg font-semibold px-6 py-3 rounded-md border-4 border-purple-800 hover:border-transparent transition-all duration-300 ease-in-out"
      >
        📁 My Resume
      </a>
    </div>
  );
};

export default Button;
