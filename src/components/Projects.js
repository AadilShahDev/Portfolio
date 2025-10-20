import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiEye } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      description: 'A cross-platform e-commerce mobile application built with React Native. Features include user authentication, product catalog, shopping cart, payment integration, and order tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe API', 'Firebase'],
      category: 'mobile',
      githubUrl: 'https://github.com/AadilShahDev/ecommerce-mobile',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Restaurant Management System',
      description: 'A comprehensive restaurant management solution with inventory tracking, order management, staff scheduling, and analytics dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MySQL', 'Express.js', 'Chart.js'],
      category: 'fullstack',
      githubUrl: 'https://github.com/AadilShahDev/restaurant-management',
      liveUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management Web App',
      description: 'A collaborative task management platform with real-time updates, team collaboration, project tracking, and deadline notifications.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      category: 'fullstack',
      githubUrl: 'https://github.com/AadilShahDev/task-manager',
      liveUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Personal Finance Tracker',
      description: 'A mobile app for tracking personal expenses, budgeting, and financial goals with beautiful charts and spending analytics.',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Firebase', 'Chart.js', 'Expo'],
      category: 'mobile',
      githubUrl: 'https://github.com/AadilShahDev/finance-tracker',
      liveUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Social Media API',
      description: 'A robust REST API for social media platform with user authentication, post management, real-time notifications, and media uploads.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
      category: 'backend',
      githubUrl: 'https://github.com/AadilShahDev/social-api',
      liveUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      description: 'A property listing and management platform with advanced search filters, virtual tours, and agent dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API', 'AWS S3'],
      category: 'fullstack',
      githubUrl: 'https://github.com/AadilShahDev/real-estate',
      liveUrl: '#',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise 
            in web development and design.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">Highlighted Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <FiEye size={48} className="text-white opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <FiEye size={48} className="text-gray-500 opacity-50" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;