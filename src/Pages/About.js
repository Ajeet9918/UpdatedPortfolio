import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";
import { FaBriefcase, FaGraduationCap, FaUserTie } from "react-icons/fa";

function About() {
  return (
    <main className="container mx-auto max-width px-6 py-20">
      {/* About Me Section */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-12 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
            <FaUserTie className="text-blue-500 dark:text-blue-400 text-xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            About Me
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {personalDetails.about}
        </p>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalDetails.details?.map((detail, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">{detail.key}</p>
              <p className="font-medium text-gray-800 dark:text-white">{detail.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-12 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-6">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
            <FaBriefcase className="text-purple-500 dark:text-purple-400 text-xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Work Experience
          </h1>
        </div>
        
        <div className="space-y-8">
          {workDetails.map(({ Position, Company, Location, Type, Duration, Responsibilities }, index) => (
            <div key={index}>
              <Work
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
                responsibilities={Responsibilities}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-6">
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
            <FaGraduationCap className="text-green-500 dark:text-green-400 text-xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Education
          </h1>
        </div>
        
        <div className="space-y-8">
          {eduDetails.map(({ Position, Company, Location, Type, Duration, Achievements }, index) => (
            <div key={index}>
              <Work
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
                achievements={Achievements}
                isEducation={true}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;