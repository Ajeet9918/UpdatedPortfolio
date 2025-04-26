import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { techStackDetails } from "../Details";
import { FiExternalLink } from "react-icons/fi";

// Floating blob component
const FloatingBlob = ({ color, size, initialX, initialY }) => {
  return (
    <motion.div
      initial={{ x: initialX, y: initialY, opacity: 0 }}
      animate={{
        x: [initialX, initialX + 50, initialX],
        y: [initialY, initialY + 30, initialY],
        opacity: [0.3, 0.5, 0.3],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 20 + Math.random() * 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }}
      className={`absolute rounded-full filter blur-xl ${color}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        zIndex: -1
      }}
    />
  );
};

function Technologies() {
  const controls = useAnimation();
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;

  const techStack = [
    { src: html, title: "HTML", category: "Frontend" },
    { src: css, title: "CSS", category: "Frontend" },
    { src: js, title: "JavaScript", category: "Language" },
    { src: react, title: "React", category: "Framework" },
    { src: redux, title: "Redux", category: "State Management" },
    { src: tailwind, title: "Tailwind CSS", category: "CSS Framework" },
    { src: bootstrap, title: "Bootstrap", category: "CSS Framework" },
    { src: sass, title: "SASS", category: "CSS Preprocessor" },
  ];

  const tools = [
    { src: vscode, title: "VS Code", category: "Code Editor" },
    { src: git, title: "Git", category: "Version Control" },
    { src: github, title: "GitHub", category: "Code Hosting" },
    { src: figma, title: "Figma", category: "Design Tool" },
    { src: npm, title: "NPM", category: "Package Manager" },
  ];

  // Floating blobs configuration
  const blobs = [
    { color: "bg-blue-500/20", size: 300, x: "10%", y: "20%" },
    { color: "bg-purple-500/20", size: 400, x: "80%", y: "30%" },
    { color: "bg-pink-500/20", size: 250, x: "50%", y: "70%" },
    { color: "bg-teal-500/20", size: 350, x: "30%", y: "50%" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Floating background elements */}
      {blobs.map((blob, index) => (
        <FloatingBlob
          key={index}
          color={blob.color}
          size={blob.size}
          initialX={blob.x}
          initialY={blob.y}
        />
      ))}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-width px-6 py-20 relative"
      >
        {/* Header Section */}
        <motion.section 
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="absolute -left-4 -top-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl -z-10"
          />
          <h2 className="text-sm font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wider mb-4">
            My Expertise
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-heading dark:text-light-heading mb-6">
            Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Tools</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-gray-900 dark:text-gray-100 max-w-3xl"
          >
            Here's a comprehensive list of technologies I work with to create modern, efficient, and scalable applications.
          </motion.p>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section 
          className="mb-20 relative z-10"
        >
          <motion.div 
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-dark-heading dark:text-light-heading">
              Tech Stack
            </h2>
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              viewport={{ once: true }}
              className="text-sm text-gray-800 dark:text-gray-100 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full"
            >
              {techStack.length} technologies
            </motion.span>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techStack.map(({ src, title, category }, index) => (
              <motion.div
                key={title}
                initial={{ y: 60, opacity: 0, rotate: -5 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  delay: index * 0.05
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.8 }
                    }}
                    className="h-16 w-16 mb-4 flex items-center justify-center"
                  >
                    <img 
                      src={src} 
                      alt={title} 
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:drop-shadow-lg" 
                    />
                  </motion.div>
                  <h3 className="font-medium text-lg text-gray-800 dark:text-gray-100 mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {category}
                  </p>
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section 
          className="relative z-10"
        >
          <motion.div 
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-dark-heading dark:text-light-heading">
              Development Tools
            </h2>
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 dark:text-gray-100 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full"
            >
              {tools.length} tools
            </motion.span>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {tools.map(({ src, title, category }, index) => (
              <motion.div
                key={title}
                initial={{ y: 60, opacity: 0, rotate: 5 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  delay: index * 0.05 + 0.2
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.8 }
                    }}
                    className="h-16 w-16 mb-4 flex items-center justify-center"
                  >
                    <img 
                      src={src} 
                      alt={title} 
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:drop-shadow-lg" 
                    />
                  </motion.div>
                  <h3 className="font-medium text-lg text-gray-800 dark:text-gray-100 mb-1 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {category}
                  </p>
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -left-20 -top-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-500 dark:text-gray-400 mb-6"
          >
            Want to see these technologies in action?
          </motion.p>
          <motion.a
            href=""
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg relative overflow-hidden"
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
              View My Projects
              <FiExternalLink className="ml-2 inline" />
            </motion.span>
            <motion.div 
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            />
          </motion.a>
        </motion.div>
      </motion.main>
    </div>
  );
}

export default Technologies;