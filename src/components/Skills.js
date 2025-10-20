import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiCloud,
  FiLayers,
  FiTool
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FiCode size={24} />,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 88 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Bootstrap', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <FiDatabase size={24} />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 75 },
        { name: 'PHP', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'REST API', level: 92 },
        { name: 'Payment Integration', level: 85 },
        { name: 'Domain Integration', level: 80 },
        { name: 'Domain Migration', level: 78 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: <FiSmartphone size={24} />,
      skills: [
        { name: 'React Native', level: 88 },
        { name: 'Flutter', level: 82 },
        { name: 'Android Development', level: 75 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <FiCloud size={24} />,
      skills: [
        { name: 'Firebase', level: 88 },
        { name: 'Git & GitHub', level: 95 },
        { name: 'Heroku', level: 80 },
        { name: 'Netlify', level: 85 },
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: <FiLayers size={24} />,
      skills: [
        { name: 'Figma', level: 88 },
        { name: 'Adobe XD', level: 82 },
        { name: 'Photoshop', level: 75 },
        { name: 'UI/UX Design', level: 85 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: <FiTool size={24} />,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 90 },
        { name: 'Figma', level: 78 },
        { name: 'npm/yarn', level: 88 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm constantly learning and adapting to new technologies. Here are the tools and 
            technologies I work with regularly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
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