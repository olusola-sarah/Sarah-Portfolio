import React from "react";
import Hero from "./Components/Hero";
import Work from "./Components/Work";



const Home = () => {
  return (
    <div className="flex justify-center items-start min-h-screen pt-10">
      <div className="w-2/3">
        <Hero />
        <Work />
      </div>
    </div>
  );
};

export default Home;
