import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";
import { FaEye, FaGithub, FaCode } from "react-icons/fa";

function Projects() {
  return (
    <main className="container mx-auto max-width px-6 py-20">
      <section className="mb-16">
        <h2 className="text-sm font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-4">
          My Work
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-heading dark:text-dark-heading mb-6">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Projects</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-700 max-w-3xl">
          Here are some of my selected projects with case studies. Each project demonstrates different skills and technologies I've mastered.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectDetails.map(
          ({ title, image, description, techstack, previewLink, githubLink }, index) => (
            <div 
              key={index}
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
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="w-full">
                  <div className="flex space-x-4">
                    {previewLink && (
                      <a
                        href={previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                        aria-label="Live Preview"
                      >
                        <FaEye className="text-lg" />
                      </a>
                    )}
                    {githubLink && (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gray-800 text-white rounded-full transition-colors"
                        aria-label="View Code"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                  <FaCode className="mr-1" /> Project
                </span>
              </div>
            </div>
          )
        )}
      </section>

      <div className="mt-16 text-center">
        <p className="text-gray-500 dark:text-gray-700 mb-6">
          Want to see more of my work?
        </p>
        <a
          href="https://github.com/Ajeet9918"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
        >
          View All Projects
          <FaGithub className="ml-2" />
        </a>
      </div>
    </main>
  );
}

export default Projects;