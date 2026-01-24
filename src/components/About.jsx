import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  DevicePhoneMobileIcon, 
  CloudIcon 
} from '@heroicons/react/24/outline';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertiseItems = [
    {
      icon: <CodeBracketIcon className="w-12 h-12" />,
      title: 'Frontend',
      description: 'React, Vue, Tailwind, HTML/CSS',
      color: 'text-indigo-500',
    },
    {
      icon: <ServerIcon className="w-12 h-12" />,
      title: 'Backend',
      description: 'Node.js, Python, MongoDB, MySQL',
      color: 'text-purple-500',
    },
    {
      icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
      title: 'Mobile',
      description: 'React Native, Flutter',
      color: 'text-pink-500',
    },
    {
      icon: <CloudIcon className="w-12 h-12" />,
      title: 'Cloud & DevOps',
      description: 'AWS, Docker, CI/CD',
      color: 'text-rose-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
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
            I'm a passionate fullstack developer with 5+ years of experience building modern web applications
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="glow-card bg-gray-900/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-400 mb-6">
                I started my journey as a frontend developer, then expanded my skills to backend technologies. 
                Today, I build complete solutions from database design to responsive interfaces.
              </p>
              <p className="text-gray-400 mb-6">
                I specialize in JavaScript ecosystem with React, Node.js, and modern frameworks. 
                I'm also experienced in cloud deployment and DevOps practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-gray-800 rounded-lg">
                  <span className="gradient-text font-medium">5+ Years Experience</span>
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-lg">
                  <span className="gradient-text font-medium">50+ Projects</span>
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-lg">
                  <span className="gradient-text font-medium">Fullstack Focus</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
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
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;