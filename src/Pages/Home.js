import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalDetails } from "../Details";
import Contact from "./Contact";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const containerRef = useRef();
  const contactBtnRef = useRef();

  useEffect(() => {
    // Master timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Container animation (subtle fade in)
    tl.from(containerRef.current, {
      opacity: 0,
      duration: 0.5,
    });

    // Text animations with staggered delays
    tl.from(h11.current, {
      x: "-50px",
      opacity: 0,
      duration: 1.2,
    })
    .from(h12.current, {
      y: "30px",
      opacity: 0,
      duration: 1,
      delay: 0.3,
    }, "<0.5")
    .from(h13.current, {
      y: "30px",
      opacity: 0,
      duration: 1,
    }, "<0.3")
    .from(myimageref.current, {
      x: "50px",
      opacity: 0,
      duration: 1.5,
      scale: 0.8,
      rotate: "-5deg",
    }, "<0.2")
    .from(contactBtnRef.current, {
      y: "20px",
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "<0.5");

    // Floating animation for the image
    gsap.to(myimageref.current, {
      y: "10px",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Background pulse effect
    gsap.to(containerRef.current, {
      backgroundPositionX: "10%",
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }, []);

  return (
    <motion.main
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-width section md:flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-700 text-white p-8 rounded-lg shadow-lg"
    >
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <motion.h1
          ref={h11}
          className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          whileHover={{ scale: 1.02 }}
        >
          Hi,👋<br></br>My Name is<br></br>
        </motion.h1>
        
        <motion.h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold text-hover"
          whileHover={{ 
            scale: 1.02,
            textShadow: "0 0 10px rgba(255,255,255,0.5)"
          }}
        >
          {name}
        </motion.h1>
        
        <motion.h2
          ref={h13}
          className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          whileHover={{ scale: 1.01 }}
        >
          {tagline}
        </motion.h2>
        
        <motion.a
          ref={contactBtnRef}
          href="/contact"
          className="mt-4 inline-block bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(255,214,0,0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </div>
      
      <motion.div 
        className="mt-5 md:mt-0"
        whileHover={{ scale: 1.03 }}
      >
        <motion.img
          ref={myimageref}
          className="w-3/4 md:ml-auto rounded-full border-4 border-white shadow-xl"
          src={img}
          alt="Ajeet Gupta"
          whileHover={{ 
            // rotate: 2,
            borderColor: "#f59e0b",
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
    </motion.main>
  );
}

export default Home;