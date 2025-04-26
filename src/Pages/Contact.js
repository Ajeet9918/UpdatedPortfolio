import React from "react";
import { motion } from "framer-motion";
import { contactDetails } from "../Details";
import { FiMail, FiPhone, FiArrowRight } from "react-icons/fi";

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
  hidden: { y: 30, opacity: 0 },
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
  y: -5,
  scale: 1.02,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10
  }
};

function Contact() {
  const { email, phone } = contactDetails;
  
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-width section px-6 py-20"
    >
      <div className="text-center max-w-3xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-sm md:text-base font-semibold text-gray-500 dark:text-gray-100 uppercase tracking-widest mb-4">
            Get In Touch
          </h2>
          <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark-heading dark:text-light-heading mb-8"
          >
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Together</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-100 mb-12 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mt-12"
        >
          {/* Email Card */}
          <motion.div 
            variants={item}
            whileHover={cardHover}
            className="bg-white dark:bg-gray-600 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl -z-10" />
            <div className="flex flex-col items-center text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring" }}
                viewport={{ once: true }}
                className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-6"
              >
                <FiMail className="text-blue-500 dark:text-blue-400 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <motion.a
                href={`mailto:${email}`}
                className="text-lg text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors flex items-center group"
                whileHover={{ x: 5 }}
              >
                {email}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <FiArrowRight />
                </motion.span>
              </motion.a>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div 
            variants={item}
            whileHover={cardHover}
            className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
          >
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl -z-10" />
            <div className="flex flex-col items-center text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mb-6"
              >
                <FiPhone className="text-purple-500 dark:text-purple-400 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <motion.a
                href={`tel:${phone}`}
                className="text-lg text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors flex items-center group"
                whileHover={{ x: 5 }}
              >
                {phone}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 0.5
                  }}
                >
                  <FiArrowRight />
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-100 mb-6">
            Alternatively, connect with me on social media
          </p>
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Add your social media icons here */}
            {/* Example: 
            <motion.a 
              href="#" 
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-10 h-10 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center"
            >
              <LinkedInIcon />
            </motion.a>
            */}
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default Contact;