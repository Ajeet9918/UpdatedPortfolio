import React from "react";
import { techStackDetails } from "../Details";
import { FiExternalLink } from "react-icons/fi";

function Technologies() {
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

  return (
    <main className="container mx-auto max-width px-6 py-20">
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wider mb-4">
          My Expertise
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-heading dark:text-dark-heading mb-6">
          Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Tools</span>
        </h1>
        <p className="text-lg text-gray-900 dark:text-gray-900 max-w-3xl">
          Here's a comprehensive list of technologies I work with to create modern, efficient, and scalable applications.
        </p>
      </section>

      <section className="mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-dark-heading dark:text-dark-heading">
            Tech Stack
          </h2>
          <span className="text-sm text-gray-800 dark:text-gray-800">
            {techStack.length} technologies
          </span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map(({ src, title, category }) => (
            <div
              key={title}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                  <img 
                    src={src} 
                    alt={title} 
                    className="h-full w-full object-contain transition-transform group-hover:scale-110" 
                  />
                </div>
                <h3 className="font-medium text-lg text-gray-800 dark:text-gray-100 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{category}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-dark-heading dark:text-dark-heading">
            Development Tools
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-600">
            {tools.length} tools
          </span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map(({ src, title, category }) => (
            <div
              key={title}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                  <img 
                    src={src} 
                    alt={title} 
                    className="h-full w-full object-contain transition-transform group-hover:scale-110" 
                  />
                </div>
                <h3 className="font-medium text-lg text-gray-800 dark:text-gray-100 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{category}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Want to see these technologies in action?
        </p>
        <a
          href=""
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
        >
          View My Projects
          <FiExternalLink className="ml-2" />
        </a>
      </div>
    </main>
  );
}

export default Technologies;