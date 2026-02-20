import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';

import profileImg from "../assets/MyPortfolio.png";
import resume from'../assets/Resume.pdf';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertiseItems = [
    {
      icon: <CodeBracketIcon className="w-12 h-12" />,
      title: 'Frontend Development',
      description: 'React, Tailwind CSS, Bootstrap, HTML5, CSS3',
      color: 'text-indigo-500',
    },
    {
      icon: <ServerIcon className="w-12 h-12" />,
      title: 'Backend Development',
      description: 'Java, Python, REST APIs, MongoDB, MySQL',
      color: 'text-purple-500',
    },
    {
      icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
      title: 'Java Technologies',
      description: 'JDBC, Servlets, Spring, Spring Boot, Hibernate',
      color: 'text-pink-500',
    },
    {
      icon: <CloudIcon className="w-12 h-12" />,
      title: 'Tools & DevOps',
      description: 'Git, GitHub, AWS Basics, CI/CD',
      color: 'text-rose-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A motivated  full-stack developer passionate about building
            real-world web applications and learning modern technologies.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="glow-card bg-gray-900/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>

              {/* Profile + Education */}
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={profileImg}
                  alt="Sachin Thorat"
                  className="w-32 h-32 rounded-full border-2 border-indigo-500 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Sachin Thorat
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Bachelor of Computer Engineering
                  </p>
                  <p className="text-gray-500 text-sm">
                    Full-Stack Developer
                  </p>
                </div>
              </div>

              <div className="mb-5 border-l-4 border-indigo-500 pl-4">
                <p className="text-gray-300 text-lg">
                  I enjoy turning ideas into clean, functional, and user-friendly web applications.
                </p>
              </div>

              <p className="text-gray-400 mb-3">
                I am a full-stack developer with a strong foundation in
                frontend and backend technologies. I have built multiple
                projects using React, Java, Spring Boot, and databases.
              </p>

              <p className="text-gray-400 mb-5">
                I focus on writing clean code, understanding core concepts, and
                continuously improving my skills through hands-on projects and practice.
              </p>

              {/* Strengths */}
              <ul className="space-y-3 text-gray-400 mb-5">
                <li>✔ Strong core Java & OOP concepts</li>
                <li>✔ Strong exception handling</li>
                <li>✔ Hands-on project experience</li>
                <li>✔ Good understanding of REST APIs</li>
                <li>✔ Quick learner & problem solver</li>
              </ul>

              {/* Resume Button */}
              <a
                href={resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 mb-8
                           bg-indigo-600 hover:bg-indigo-700
                           text-white font-semibold rounded-lg
                           transition-all duration-300 shadow-lg"
              >
                📄 Download Resume
              </a>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h4 className="text-2xl font-bold gradient-text">10+</h4>
                  <p className="text-sm text-gray-400">Projects</p>
                </div>
                {/* <div>
                  <h4 className="text-2xl font-bold gradient-text">100+</h4>
                  <p className="text-sm text-gray-400">DSA Problems</p>
                </div> */}
                <div>
                  <h4 className="text-2xl font-bold gradient-text">∞</h4>
                  <p className="text-sm text-gray-400">Learning</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {expertiseItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glow-card bg-gray-900/50 p-6 rounded-xl text-center"
              >
                <div className={`${item.color} mb-4 flex justify-center`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
