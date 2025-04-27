import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactDetails } from "../Details";

const Contact = () => {
  const { email, phone } = contactDetails;
  const WEB3FORMS_ACCESS_KEY = "786ecaff-a7c2-4b56-bb62-a6e1621663d8";

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mt-4 w-full bg-black/40 backdrop-blur-lg rounded-3xl p-8 md:p-16 grid md:grid-cols-2 gap-12 shadow-2xl">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Got a project or an idea? Reach out and let's build something amazing together.
          </p>
          <div className="mt-6">
            <p className="flex items-center space-x-2 mb-4">
              <span className="font-semibold">Email:</span> <span>{email}</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="font-semibold">Phone:</span> <span>{phone}</span>
            </p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="p-4 rounded-lg bg-white/20 text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Send Message
            </button>
            {status && (
              <p className="text-green-400 text-sm pt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
