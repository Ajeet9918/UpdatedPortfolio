import React, { useState } from "react";
import { motion } from "framer-motion";
// import Project from "../Components/Project";
import { projectDetails } from "../Details";
import { FaEye, FaGithub, FaCode, FaChevronRight } from "react-icons/fa";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animation variants - simplified for better performance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-black/40 backdrop-blur-lg pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section - Improved semantics and responsiveness */}
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="inline-block"
          >
           
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900 dark:text-white"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl mx-auto md:mx-0 text-lg text-gray-600 dark:text-gray-300"
          >
            Here are some of my selected projects with case studies. Each project demonstrates different skills and technologies I've mastered.
          </motion.p>
        </div>

        {/* Projects Grid - Improved grid system for better responsiveness */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projectDetails.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Project Image with optimized loading */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Project badge - improved positioning */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                    <FaCode className="mr-1 text-xs" aria-hidden="true" /> Project
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                
                {/* Tech Stack - Fixed to handle different data types */}
                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techstack && Array.isArray(project.techstack) ? (
                      project.techstack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))
                    ) : project.techstack && typeof project.techstack === 'string' ? (
                      <span className="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                        {project.techstack}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Tech stack not specified
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Action buttons - Better responsive design */}
                <div className="flex mt-auto space-x-3">
                  {project.previewLink && (
                    <motion.a
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`View live preview of ${project.title}`}
                    >
                      <FaEye className="mr-2" aria-hidden="true" />
                      <span>Preview</span>
                    </motion.a>
                  )}
                  
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`View source code for ${project.title} on GitHub`}
                    >
                      <FaGithub className="mr-2" aria-hidden="true" />
                      <span>Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section - Improved responsiveness and accessibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/Ajeet9918"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.97 }}
            aria-label="View all projects on GitHub"
          >
            <span className="flex items-center">
              View All Projects
              <FaChevronRight className="ml-2 text-sm" aria-hidden="true" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;