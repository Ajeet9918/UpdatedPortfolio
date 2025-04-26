import React from "react";
import { motion } from "framer-motion";
import Project from "../Components/Project";
import { projectDetails } from "../Details";
import { FaEye, FaGithub, FaCode } from "react-icons/fa";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardHover = {
  y: -10,
  scale: 1.02,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10
  }
};

function Projects() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-width px-6 py-20"
    >
      {/* Header Section */}
      <motion.section 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.8
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 relative"
      >
        {/* Floating decorative element */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 360 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute -left-20 -top-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl -z-10"
        />
        
        <h2 className="text-sm font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-4">
          My Work
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-heading dark:text-light-heading mb-6">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Projects</span>
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-100 max-w-3xl"
        >
          Here are some of my selected projects with case studies. Each project demonstrates different skills and technologies I've mastered.
        </motion.p>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectDetails.map(
          ({ title, image, description, techstack, previewLink, githubLink }, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={cardHover}
              viewport={{ margin: "0px 0px -50px 0px" }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <Project
                title={title}
                image={image}
                description={description}
                techstack={techstack}
                previewLink={previewLink}
                githubLink={githubLink}
              />
              
              {/* Hover overlay with buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6"
              >
                <div className="w-full">
                  <div className="flex space-x-4">
                    {previewLink && (
                      <motion.a
                        href={previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                        aria-label="Live Preview"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaEye className="text-lg" />
                      </motion.a>
                    )}
                    {githubLink && (
                      <motion.a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-full transition-colors"
                        aria-label="View Code"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="text-lg" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
              
              {/* Project badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                viewport={{ once: true }}
                className="absolute top-4 right-4"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                  <FaCode className="mr-1" /> Project
                </span>
              </motion.div>
            </motion.div>
          )
        )}
      </motion.section>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.8
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 text-center"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-500 dark:text-gray-100 mb-6"
        >
          Want to see more of my work?
        </motion.p>
        <motion.a
          href="https://github.com/Ajeet9918"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg relative overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative z-10"
          >
            View All Projects
            <FaGithub className="ml-2 inline" />
          </motion.span>
          <motion.div 
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"
          />
        </motion.a>
      </motion.div>
    </motion.main>
  );
}

export default Projects;