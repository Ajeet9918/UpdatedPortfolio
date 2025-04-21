import React from "react";
import { contactDetails } from "../Details";
import { FiMail, FiPhone, FiArrowRight } from "react-icons/fi";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-sm md:text-base font-semibold text-gray-500 dark:text-gray-600 uppercase tracking-widest mb-4">
          Get In Touch
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark-heading dark:text-dark-heading mb-8">
          Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Together</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-6">
                <FiMail className="text-blue-500 dark:text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <a
                href={`mailto:${email}`}
                className="text-lg text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors flex items-center group"
              >
                {email}
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mb-6">
                <FiPhone className="text-purple-500 dark:text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <a
                href={`tel:${phone}`}
                className="text-lg text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors flex items-center group"
              >
                {phone}
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-800 mb-6">
            Alternatively, connect with me on social media
          </p>
          <div className="flex justify-center space-x-6">
            {/* Add your social media icons here */}
            {/* Example: <LinkedInIcon /> <GitHubIcon /> etc. */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;