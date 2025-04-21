import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright and credit */}
          <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            <span>© {currentYear} Ajeet Gupta</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center">
              Made with <span className="text-red-500 mx-1">♥</span> and ☕
            </span>
          </div>

          {/* Social links */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Ajeet9918" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <span className="text-xl">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <span className="text-xl">LinkedIn</span>
            </a>
            <a 
              href="mailto:your@email.com" 
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <span className="text-xl">Email</span>
            </a>
          </div>
        </div>

        {/* Attribution (optional) */}
        <div className="mt-2 text-center text-xs text-gray-400 dark:text-gray-500">
          Built with React and Tailwind CSS
        </div>
      </div>
    </footer>
  );
}

export default Footer;