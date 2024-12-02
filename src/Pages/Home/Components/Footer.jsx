import React, { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null); // State to manage hovered icon

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Use effect to add/remove dark class to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Icon data
  const icons = [
    {
      name: "Twitter",
      icon: <FaTwitter size={22} />,
      url: "https://twitter.com/KorodeOlusola",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      url: "https://www.linkedin.com/in/sarah-olusola",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={22} />,
      url: "https://github.com/olusola-sarah",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={22} />,
      url: "https://wa.me/09091136262",
    },
  ];

  return (
    <div
      className={`fixed bottom-7 left-1/2 transform -translate-x-1/2 p-4 rounded-full shadow-lg transition-all duration-200 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } ${hoveredIcon ? "scale-105" : "scale-100"}`} // Scale effect based on hovered icon
    >
      <div className="flex items-center space-x-4">
        {/* Render icons with labels */}
        {icons.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredIcon(item.name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200 group"
            >
              {item.icon}
            </a>
            {/* Tooltip for icon name */}
            {hoveredIcon === item.name && (
              <div className="absolute bottom-8 w-24 text-center bg-gray-700 text-white rounded-md p-1 text-xs">
                {item.name}
              </div>
            )}
          </div>
        ))}

        {/* Divider */}
        <div className="border-l border-gray-400 h-6 mx-2" />

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="hover:scale-110 transition-transform duration-200"
        >
          {darkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
        </button>
      </div>
    </div>
  );
};

export default Footer;
