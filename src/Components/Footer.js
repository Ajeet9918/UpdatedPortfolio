import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Social icons

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-14">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h1 className="text-white text-2xl font-semibold mb-2">Ajeet Gupta</h1>
            <p className="text-gray-400 text-sm">Made with <span className="text-red-500">♥</span> and ☕</p>
            <p className="text-gray-500 text-xs mt-1">© {currentYear} All rights reserved.</p>
          </div>

          {/* Center - Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm font-medium">
            <Link 
              to="/" 
              className="hover:text-white transition duration-300 relative group"
            >
              Home
              <span className="block h-0.5 bg-white max-w-0 group-hover:max-w-full transition-all duration-500"></span>
            </Link>
            <Link 
              to="/about" 
              className="hover:text-white transition duration-300 relative group"
            >
              About
              <span className="block h-0.5 bg-white max-w-0 group-hover:max-w-full transition-all duration-500"></span>
            </Link>
            <Link 
              to="/projects" 
              className="hover:text-white transition duration-300 relative group"
            >
              Projects
              <span className="block h-0.5 bg-white max-w-0 group-hover:max-w-full transition-all duration-500"></span>
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-white transition duration-300 relative group"
            >
              Contact
              <span className="block h-0.5 bg-white max-w-0 group-hover:max-w-full transition-all duration-500"></span>
            </Link>
          </div>

          {/* Right - Social Links */}
          <div className="flex space-x-6 text-gray-400 text-lg">
            <a
              href="https://github.com/Ajeet9918"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110 duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your@email.com"
              className="hover:text-white transition transform hover:scale-110 duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="mt-10 text-center text-xs text-gray-500">
          Built with <span className="font-semibold text-white">React</span> & <span className="font-semibold text-white">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
