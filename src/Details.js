
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/crop-advisory.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.png";
import projectImage7 from "./assets/projects/project7.png";
import projectImage8 from "./assets/projects/project8.png";
import projectImage9 from "./assets/projects/project9.png";
import projectImage10 from "./assets/projects/project10.png";
import projectImage11 from "./assets/projects/project11.png";




export const logos = {
  // logogradient: logogradient,
  // logo: logo,
};

export const personalDetails = {
  name: "Ajeet Kumar Gupta",
  tagline: "I build things for web",
  img: profile,
  about: `Hello! I’m Ajeet Kumar Gupta, a passionate Full Stack Developer and a current student at Lovely Professional University, where I’m pursuing a degree in B.Tech (Computer Science and Engineering). My journey into the world of technology began with a curiosity for how things work, and it has evolved into a deep love for building dynamic and user-friendly web applications. I have a strong foundation in technologies such as HTML, CSS, JavaScript, and frameworks like React and Node.js.`,
};

//Social Media URLs
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/ajeet-gupta-567011326/",
  github: "https://github.com/Ajeet9918",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};


export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Unknown",
    Type: "Unknown",
    Duration: "Unknown",
  },
  {
    Position: "Summer Training Internship ",
    Company: `Gokboru Tech`,
    Location: "Online from Home",
    Type: "Internship",
    Duration: "May-July",
  },
];


export const eduDetails = [
  {
    Position: "HighSchool Education",
    Company: "Narayana Public School",
    Location: "Gonda,UP",
    Type: "Education",
    Duration: "2019-2020",
  },
  {
    Position: "Intermediate Education",
    Company: "Narayana Public School",
    Location: "Gonda,UP",
    Type: "Education",
    Duration: "2020-2021",
  },
  {
    Position: "Computer Science and Engineering",
    Company: `Lovely Professional University`,
    Location: "Punjab",
    Type: "Graduation",
    Duration: "Aug 2023 - Present",
  },
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

export const certificatesData = [
  {
    id: 1,
    title: "HTML,CSS and JavaScript for web developers",
    issuer: "NPTEL",
    date: "March 2024",
    image: projectImage9,  
    skills: ["HTML", "CSS", "Responsive web designing"] 
  },
  {
    id: 2,
    title: "Server side javascript and Node js",
    issuer: "Coursera",
    date: "April 2024",
    image: projectImage8,  
    skills: ["Node.js", "JavaScript", "Backend"]  
  },
  {
    id: 3,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "October 2024",
    image: projectImage7,  
    skills: ["Cloud Architecture", "AWS", "Virtualization"] 
  },
  {
    id: 4,
    title: "Reactjs and Tailwind CSS",
    issuer: "Gokboru Tech",
    date: "July 2024",
    image: projectImage10,  
    skills: ["React.js", "CSS", "Responsive web designing"] 
  },
  {
    id: 5,
    title: "Prompt Engineering",
    issuer: "Coursera",
    date: "February 2024",
    image: projectImage11,  
    skills: ["NLP","LLM"] 
  }
];


export const projectDetails = [
  {
    title: "Grocery Website",
    image: projectImage1,
    description: `This is a fully responsive online grocery store designed to provide users with a seamless shopping experience. Built using HTML, CSS, and JavaScript, this project showcases my skills in front-end web development and user interface design`,
    techstack: "HTML/,CSS and JavaScript",
    previewLink: "https://project-deployment-app.vercel.app/",
    githubLink: "https://github.com/Ajeet9918/projectDeployment.app.git",
  },
  {
    title: "Weather Application",
    image: projectImage2,
    description: `This is an interactive weather application built with ReactJS, designed to provide users with real-time weather updates for any city worldwide.This project demonstrates my proficiency in React and API integration, offering features like current conditions, forecasts, and location-based weather data`,
    techstack: "React.js , CSS and javascript",
    previewLink: "https://ajeet884-weather-react.vercel.app/",
    githubLink: "https://github.com/Ajeet9918/WeatherApp.git",
  },
  {
    title: "Crop-Advisery",
    image: projectImage3,
    description: `This is a comprehensive agricultural advisory platform developed using Laravel, designed to provide farmers with essential information and guidance on crop management, pest control, and best farming practices. This project showcases my skills in database management, and user-centric design, aimed at enhancing agricultural productivity and sustainability.

`,
    techstack: "PHP,sqlite,CSS,Openweather api",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Fitness-tracker website",
    image: projectImage4,
    description: `This is a dynamic web application designed to help users monitor and enhance their fitness journey. Built with ReactJS and TypeScript, this application provides a user-friendly interface for tracking workouts, managing nutrition, and setting fitness goals`,
    techstack: "React.js ,TypeScript, CSS",
    previewLink: "https://ajeetgupta-fitness-tracker.vercel.app/",
    githubLink: "https://github.com/Ajeet9918/Fitness-tracker.git",
  },
  {
    title: "Online Shopping",
    image: projectImage5,
    description: `This  is a robust online shopping platform developed using PHP and MySQL, designed to provide users with a seamless and secure shopping experience. This project highlights my skills in back-end development, database management, and e-commerce functionality.`,
    techstack: "PHP,mysql",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Portfolio website",
    image: projectImage6,
    description: `MyPortfolio is a dynamic personal portfolio website built using ReactJS, designed to showcase my skills, projects, and professional experience in a visually appealing and interactive manner. This project highlights my proficiency in front-end development and my ability to create responsive, user-friendly web applications`,
    techstack: "React.js ,tailwind+CSS,javscript",
    previewLink: "https://ajeetgupta-react-portfolio.vercel.app/",
    githubLink: "https://github.com/Ajeet9918/ReactPortfolio.git",
  },
];

export const contactDetails = {
  email: "ajeetgupta7254@gmail.com",
  phone: "91+ 8840157254",
};
