import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import Contact from "./Contact";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-700 text-white p-8 rounded-lg shadow-lg">
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <h1
          ref={h11}
          className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold text-hover"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
        <a
          href="/contact"
          className="mt-4 inline-block bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300"
        >
          Contact Me
        </a>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          ref={myimageref}
          className="w-1/2 md:ml-auto rounded-full border-4 border-white shadow-xl"
          src={img}
          alt="Ajeet Gupta"
        />
      </div>
    </main>
  );
}

export default Home;