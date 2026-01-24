import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShoppingCartIcon, 
  ClipboardDocumentListIcon, 
  FilmIcon,
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with React frontend, Node.js backend, and Stripe payment integration.',
      icon: <ShoppingCartIcon className="w-16 h-16" />,
      gradient: 'from-indigo-900/50 to-purple-900/50',
      color: 'text-indigo-400',
      hoverColor: 'hover:text-indigo-300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      delay: 0
    },
    {
      title: 'Project Management App',
      description: 'Collaborative project management tool with real-time updates, task tracking, and team collaboration features.',
      icon: <ClipboardDocumentListIcon className="w-16 h-16" />,
      gradient: 'from-purple-900/50 to-pink-900/50',
      color: 'text-purple-400',
      hoverColor: 'hover:text-purple-300',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      delay: 0.2
    },
    {
      title: 'Streaming Service',
      description: 'Video streaming platform with user profiles, recommendations, and multi-device support.',
      icon: <FilmIcon className="w-16 h-16" />,
      gradient: 'from-pink-900/50 to-rose-900/50',
      color: 'text-pink-400',
      hoverColor: 'hover:text-pink-300',
      technologies: ['React Native', 'Python', 'AWS', 'Redis'],
      delay: 0.4
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
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
            Here are some of my recent fullstack development projects
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: project.delay }}
              whileHover={{ y: -10 }}
              className="glow-card bg-gray-900/50 rounded-xl overflow-hidden group"
            >
              <div className={`h-48 ${project.gradient} overflow-hidden flex items-center justify-center`}>
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className={`${project.color} ${project.hoverColor} font-medium flex items-center cursor-pointer`}
                >
                  View Project <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-gray-700 text-white rounded-lg font-medium hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
          >
            View All Projects <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;