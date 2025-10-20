import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiHeart, FiTarget } from 'react-icons/fi';

const About = () => {
  const stats = [
    { number: '30+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: <FiCode size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my priority.'
    },
    {
      icon: <FiHeart size={24} />,
      title: 'User-Centered',
      description: 'Every design decision is made with the end user in mind.'
    },
    {
      icon: <FiTarget size={24} />,
      title: 'Goal-Oriented',
      description: 'Focused on delivering solutions that meet business objectives.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Passionate Developer & Designer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer from Sukkur, Pakistan, with expertise in both web and 
              mobile app development. With over 2 years of experience, I specialize in creating end-to-end 
              solutions using modern technologies like React, React Native, Node.js, and various databases.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My journey spans across frontend and backend development, mobile app creation, and database 
              management. I'm committed to writing clean, efficient code and delivering exceptional user 
              experiences. I constantly explore new technologies and best practices to stay ahead in the 
              ever-evolving tech landscape.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;