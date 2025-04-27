import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalDetails } from "../Details";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const { name, tagline, img } = personalDetails;
  const containerRef = useRef();
  const headingRefs = useRef([]);
  const imageRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(containerRef.current, { opacity: 0, duration: 0.5 })
      .from(headingRefs.current, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
      }, "<0.3")
      .from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        rotate: -5,
        duration: 1.2,
      }, "<0.3")
      .from(buttonRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "<0.2");

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <motion.main
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden bg-black/30 backdrop-blur-lg pb-24"
    >
      {/* Blurred Background Overlay */}
      {/* <div className="absolute inset-0 /40 backdrop-blur-md z-0"></div> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left - Text */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <motion.h1
            ref={(el) => headingRefs.current[0] = el}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            whileHover={{ scale: 1.03 }}
          >
            Hi 👋, I'm
          </motion.h1>

          <motion.h2
            ref={(el) => headingRefs.current[1] = el}
            className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-500 font-extrabold leading-tight"
            whileHover={{ scale: 1.03 }}
          >
            {name}
          </motion.h2>

          <motion.h3
            ref={(el) => headingRefs.current[2] = el}
            className="text-2xl md:text-3xl text-gray-300 font-medium"
            whileHover={{ scale: 1.02 }}
          >
            {tagline}
          </motion.h3>

          <motion.a
            ref={buttonRef}
            href="/contact"
            className="inline-block mt-6 bg-blue-400 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-300 transition transform hover:scale-105"
            whileHover={{
              boxShadow: "0 5px 20px rgba(255,214,10,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>

        {/* Right - Image */}
        <motion.div
          className="w-72 md:w-96"
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            ref={imageRef}
            src={img}
            alt="Ajeet Gupta"
            className="rounded-full border-4 border-yellow-400 shadow-lg object-cover"
            whileHover={{
              borderColor: "#facc15",
              transition: { duration: 0.4 },
            }}
          />
        </motion.div>
      </div>
    </motion.main>
  );
}

export default Home;
