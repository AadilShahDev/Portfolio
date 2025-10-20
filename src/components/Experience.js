import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer (Freelance)',
      company: 'Self-Employed',
      location: 'Sukkur, Pakistan',
      duration: '2022 - Present',
      type: 'Freelance',
      description: [
        'Developed 30+ web and mobile applications for clients worldwide',
        'Specialized in React.js, React Native, and Node.js development',
        'Created responsive, cross-platform solutions with modern UI/UX',
        'Managed complete project lifecycles from planning to deployment',
        'Integrated payment gateways, APIs, and third-party services',
        'Maintained 100% client satisfaction rate with on-time delivery'
      ],
      technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'MySQL', 'Firebase']
    },
    {
      title: 'Mobile App Developer',
      company: 'Various Clients',
      location: 'Remote',
      duration: '2023 - Present',
      type: 'Contract',
      description: [
        'Built cross-platform mobile applications using React Native',
        'Developed native Android and iOS applications',
        'Implemented real-time features using Firebase and Socket.io',
        'Optimized app performance and user experience',
        'Published apps to Google Play Store and Apple App Store'
      ],
      technologies: ['React Native', 'Expo', 'Firebase', 'Android Studio', 'Xcode']
    },
    {
      title: 'Backend Developer',
      company: 'Freelance Projects',
      location: 'Remote',
      duration: '2022 - 2024',
      type: 'Contract',
      description: [
        'Designed and developed RESTful APIs using Node.js and Express',
        'Managed databases including MongoDB, MySQL, and PostgreSQL',
        'Implemented user authentication and authorization systems',
        'Integrated payment systems like Stripe and PayPal',
        'Deployed applications on cloud platforms like Heroku and Netlify'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JWT', 'Stripe API']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey through various roles and companies, 
            building expertise in modern web development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10"></div>
              )}
              
              <div className="flex items-start">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mr-6 relative z-10">
                  <FiBriefcase size={24} />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center mb-1">
                        <FiCalendar size={14} className="mr-1" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center mb-1">
                        <FiMapPin size={14} className="mr-1" />
                        {experience.location}
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm border dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;