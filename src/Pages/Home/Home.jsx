import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const [refHero, inViewHero] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refWork, inViewWork] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refEducation, inViewEducation] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refSkills, inViewSkills] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="flex justify-center items-start min-h-screen pt-10 overflow-hidden">
      <div className="w-2/3 space-y-10">
        <motion.div
          ref={refHero}
          variants={fadeInUp}
          initial="hidden"
          animate={inViewHero ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className={`transition-opacity duration-500 ${
            inViewHero ? "opacity-100" : "opacity-50"
          }`} 
        >
          <Hero />
        </motion.div>

        <motion.div
          ref={refWork}
          variants={fadeInUp}
          initial="hidden"
          animate={inViewWork ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className={`transition-opacity duration-500 ${
            inViewWork ? "opacity-100" : "opacity-50"
          }`} 
        >
          <Work />
        </motion.div>

        <motion.div
          ref={refEducation}
          variants={fadeInUp}
          initial="hidden"
          animate={inViewEducation ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className={`transition-opacity duration-500 ${
            inViewEducation ? "opacity-100" : "opacity-50"
          }`}
        >
          <Education />
        </motion.div>

        <motion.div
          ref={refSkills}
          variants={fadeInUp}
          initial="hidden"
          animate={inViewSkills ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className={`transition-opacity duration-500 ${
            inViewSkills ? "opacity-100" : "opacity-50"
          }`}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
