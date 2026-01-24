import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImg from "../assets/MyPortfolio.png";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Sachin</span>
            </h1>
            <div className="typewriter text-2xl md:text-3xl font-semibold mb-6">
              Fullstack Developer & UI/UX Designer
            </div>
            <p className="text-gray-400 mb-8 max-w-lg">
              I create beautiful, functional web applications with modern technologies. 
              Passionate about clean code, responsive design, and seamless user experiences.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 border border-gray-700 text-white rounded-lg font-medium hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
         <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="md:w-1/2 flex justify-center"
>
  <div className="relative float-animation">
    
    <div className="w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[550px] lg:h-[550px]">
      <img
        src={profileImg}
        alt="Hero Profile"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>

    {/* Optional floating glow shapes */}
    <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20 animate-pulse"></div>
    <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 opacity-20 animate-pulse"></div>

  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;