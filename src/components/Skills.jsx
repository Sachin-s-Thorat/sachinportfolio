import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  PaintBrushIcon, 
  ServerIcon, 
  WrenchScrewdriverIcon 
} from '@heroicons/react/24/outline';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <PaintBrushIcon className="w-8 h-8" />,
      color: 'from-indigo-600 to-purple-600',
      textColor: 'text-indigo-400',
      skills: [
        { name: 'React.js', percentage: 95 },
        { name: 'Java Script', percentage: 85 },
        { name: 'HTML/CSS', percentage: 98 },
        { name: 'Tailwind CSS', percentage: 90 },
      ]
    },
    {
      title: 'Backend',
      icon: <ServerIcon className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-600',
      textColor: 'text-purple-400',
      skills: [
        { name: 'Java', percentage: 92 },
        { name: 'Python', percentage: 80 },
        { name: 'MongoDB', percentage: 88 },
        { name: 'MYSQL', percentage: 85 },
      ]
    },
    {
      title: 'Other',
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      color: 'from-pink-600 to-rose-600',
      textColor: 'text-pink-400',
      skills: [
        { name: 'AWS', percentage: 75 },
        { name: 'Docker', percentage: 70 },
        { name: 'Git/GitHub', percentage: 95 }
       
      ]
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've worked with a wide range of technologies across the fullstack spectrum
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glow-card bg-gray-900/50 p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className={category.textColor}>{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;