import React from "react";
import { motion } from "framer-motion";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";
import { FaBriefcase, FaGraduationCap, FaUserTie } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardHover = {
  scale: 1.02,
  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    duration: 0.3,
    ease: "easeOut"
  }
};

function About() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto max-width px-6 py-20"
    >
      {/* About Me Section */}
      <motion.section
        variants={itemVariants}
        whileHover={cardHover}
        className="bg-white dark:bg-gray-800 p-8 mt-6 rounded-2xl shadow-xl mb-12 border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-center mb-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4"
          >
            <FaUserTie className="text-blue-500 dark:text-blue-400 text-xl" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            About Me
          </h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          {personalDetails.about}
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {personalDetails.details?.map((detail, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              }}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">{detail.key}</p>
              <p className="font-medium text-gray-800 dark:text-white">{detail.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section
        variants={itemVariants}
        whileHover={cardHover}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-12 border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-center mb-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4"
          >
            <FaBriefcase className="text-purple-500 dark:text-purple-400 text-xl" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Work Experience
          </h1>
        </div>
        
        <motion.div 
          variants={containerVariants}
          className="space-y-8"
        >
          {workDetails.map(({ Position, Company, Location, Type, Duration, Responsibilities }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <Work
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
                responsibilities={Responsibilities}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        variants={itemVariants}
        whileHover={cardHover}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-center mb-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
            className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4"
          >
            <FaGraduationCap className="text-green-500 dark:text-green-400 text-xl" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Education
          </h1>
        </div>
        
        <motion.div 
          variants={containerVariants}
          className="space-y-8"
        >
          {eduDetails.map(({ Position, Company, Location, Type, Duration, Achievements }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <Work
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
                achievements={Achievements}
                isEducation={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.main>
  );
}

export default About;