import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import cabBookingImg from '../assets/cab.jpg';
import EMS from   '../assets/Ems.png';

import expense  from '../assets/Expense-Tracker.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Expense trackers',
      description:
        'This project built In Using React And Use Local Storge  Html CSS JS and Bosstrap Using State Mangment ',
      media: expense, // 
      type: 'image',
      technologies: ['React', 'Html', 'css', 'Bosstrap'],
      repoLink: 'https://github.com/Sachin-s-Thorat/My-Expensec:\Users\ADMIN\Downloads\Resume.pdf',
      delay: 0,
    },
    {
      title: 'Employee Record Management',
      description:
        'The application supports CRUD operations such as adding, updating, deleting, and retrieving employee records.I used Spring Data JPA and Hibernate for database interaction and exposed RESTful APIs for client communication',
      media: EMS, // video path
      type: 'image',
      technologies: ['React', 'Spring', 'Postman', 'MySql'],
      repoLink: 'https://github.com/Sachin-s-Thorat/Ems_Backed_react',
      delay: 0.2,
    },
    {
      title: 'Cab Booking System',
      description:
        'CLI-based Java project using strong OOP concepts and exception handling to solve real-world problems.',
      media: cabBookingImg,
      type: 'image',
      technologies: ['Java', 'OOP', 'Abstraction', 'Polymorphism'],
      repoLink: 'https://github.com/Sachin-s-Thorat/Cab-Booking-System',
      delay: 0.4,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of my recent full-stack and Java projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: project.delay }}
              whileHover={{ y: -10 }}
              className=" glow-card bg-gray-900/60 rounded-xl overflow-hidden shadow-lg group"
            >

              {/* Image / Video */}
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="h-48 w-full"
                >
                  {project.type === 'image' ? (
                    <img
                      src={project.media}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      src={project.media}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                    />
                  )}
                </motion.div>
              </a>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center"
                >
                  View Project
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
