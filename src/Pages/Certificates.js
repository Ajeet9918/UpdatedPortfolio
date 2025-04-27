import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificatesData } from "../Details";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

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
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    y: -10,
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <motion.section 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="text-gray-800 pt-24 min-h-screen px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-lg pb-24" // Added pb-24
>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 "
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          >
            My Certifications
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            Here are the certifications I've earned through dedicated learning and skill development.
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificatesData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={item}
              whileHover={cardHover}
              viewport={{ margin: "0px 0px -50px 0px" }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative"
            >
              {/* Floating glow effect */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 -z-10"
              />
              
              <div 
                className="h-64 overflow-hidden cursor-pointer relative"
                onClick={() => openModal(cert)}
              >
                <motion.img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain bg-white p-2 group-hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center"
                >
                  <motion.span 
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium"
                  >
                    View Certificate
                  </motion.span>
                </motion.div>
              </div>
              
              <div className="p-6 group-hover:bg-gray-600 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                <div className="flex justify-between text-gray-300 text-sm mb-3">
                  <span>Issued by: {cert.issuer}</span>
                  <span>Date: {cert.date}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <motion.span 
                      key={index} 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-2 py-1 bg-gray-500 rounded-full text-xs text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-yellow-400 text-3xl"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &times;
                </motion.button>
                
                <motion.div 
                  className="bg-white rounded-lg overflow-hidden max-h-[90vh] flex flex-col"
                  layoutId={`cert-container-${selectedCert.id}`}
                >
                  <motion.div 
                    className="flex-grow overflow-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.img 
                      src={selectedCert.image} 
                      alt={selectedCert.title} 
                      className="w-full h-auto object-contain"
                      layoutId={`cert-image-${selectedCert.id}`}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="p-6 bg-gray-100"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{selectedCert.title}</h3>
                    <div className="flex justify-between text-gray-700 mb-4">
                      <span>Issued by: {selectedCert.issuer}</span>
                      <span>Date: {selectedCert.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, index) => (
                        <motion.span 
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                          className="px-2 py-1 bg-gray-300 rounded-full text-xs text-gray-800"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Certificates;