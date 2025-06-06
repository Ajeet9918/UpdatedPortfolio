import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('header')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links - DRY principle
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/technologies", name: "Skills" },
    { path: "/projects", name: "Projects" },
    { path: "/certificates", name: "Certificates" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-800/90 backdrop-blur-md shadow-lg" 
          : "bg-gray-800"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Improved for larger screens */}
          <NavLink to="/" className="flex items-center">
            <div>
              <span className="block text-xl md:text-2xl font-bold text-white">
                Ajeet Kumar Gupta
              </span>
              <span className="block text-xs md:text-sm text-gray-300">
                Full Stack Developer
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation - Better spacing for full width */}
          <nav className="hidden lg:flex items-center justify-end space-x-1 xl:space-x-2 flex-1 ml-10">
            <ul className="flex space-x-1 xl:space-x-8">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm xl:text-base ${
                        isActive ? "text-blue-400" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Social Media Links - Compacted for better layout */}
            <div className="flex items-center space-x-3 xl:space-x-4 ml-4 xl:ml-8 pl-4 xl:pl-8 border-l border-gray-700">
              <a href={twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon">
                <svg className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href={linkdein} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
                <svg className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
                <svg className="w-5 h-5 text-gray-300 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              
              {/* Resume button - Better position for full width */}
              <a
                href="/resume/Spec-CV.pdf"
                download="Spec-CV.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Download Resume"
                className="ml-1 flex items-center gap-2 text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-full px-4 py-1.5 text-sm transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Resume</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button - Better transition */}
          <button
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 flex flex-col space-y-1.5 relative">
              <span 
                className={`h-0.5 w-6 bg-white absolute transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span 
                className={`h-0.5 w-6 bg-white absolute top-1.5 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span 
                className={`h-0.5 w-6 bg-white absolute top-3 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Improved animation and UX */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 px-2">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-gray-300 hover:text-blue-400 transition-colors font-medium rounded-lg ${
                        isActive ? "text-blue-400 bg-gray-700/50" : "hover:bg-gray-700/30"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-8 mt-6 pt-6 border-t border-gray-700">
              <a href={twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon-mobile">
                <svg className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href={linkdein} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon-mobile">
                <svg className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon-mobile">
                <svg className="w-6 h-6 text-gray-300 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
            
            {/* Mobile Resume Button */}
            <div className="flex justify-center mt-4">
              <a
                href="/resume/Spec-CV.pdf"
                download="Spec-CV.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Download Resume"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2.5 transition-colors w-full max-w-xs"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;