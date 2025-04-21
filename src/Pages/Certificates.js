import React, { useState } from "react";
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

  return (
    <section className="bg-white text-gray-800 pt-24 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            My Certifications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the certifications I've earned through dedicated learning and skill development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform hover:bg-gray-600 group"
            >
              <div 
                className="h-64 overflow-hidden cursor-pointer" 
                onClick={() => openModal(cert)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain bg-white p-2 group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6 group-hover:bg-gray-600 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                <div className="flex justify-between text-gray-300 text-sm mb-3">
                  <span>Issued by: {cert.issuer}</span>
                  <span>Date: {cert.date}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-500 rounded-full text-xs text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged certificate view */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 text-3xl"
              >
                &times;
              </button>
              <div className="bg-white rounded-lg overflow-hidden max-h-[90vh] flex flex-col">
                <div className="flex-grow overflow-auto">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-6 bg-gray-100">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{selectedCert.title}</h3>
                  <div className="flex justify-between text-gray-700 mb-4">
                    <span>Issued by: {selectedCert.issuer}</span>
                    <span>Date: {selectedCert.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-gray-300 rounded-full text-xs text-gray-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certificates;