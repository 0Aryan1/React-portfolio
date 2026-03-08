import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";




export const ABOUT_TEXT = `Hello! I'm Aryan Agrawal, from Firozabad, the city of Bangles.

I am a creative, goal-oriented individual with strong moral values, excellent communication skills, organizational abilities, and meticulous attention to detail.

I am currently pursuing a Bachelor's of Engineering at JIIT Noida (2022–2026).

I have been the Public Relation Head of Parola Society - JIIT and the Marketing Head of , the CICE Hub.

Here are some of my strengths:`;

export const EXPERIENCES = [

  
  {
    year: "May,2025 - present",
    role: "Frontend Developer",
    company: "Swapple Solution Pvt. Ltd.",
    description: [
      "Developed and maintained responsive user interfaces using React.js, ensuring seamless performance across devices and improving overall user accessibility by 35%.",
      "Implemented secure frontend authentication flows, improving user onboarding efficiency and reducing login-related issues by 30%.",
      "Integrated and managed APIs with proper CORS handling, asynchronous data fetching, and dynamic UI rendering, reducing data-related UI errors by 40%.",
      "Optimized frontend performance and code reusability using modular components and state management, decreasing page load time by 25% and improving maintainability."
    ],
    technologies: ["HTML","TailwindCSS","Javascript", "React.js"],
  },
];

export const PROJECTS = [

  {
    title:"Zingr - Food Discovery & Ordering Platform" ,
    image:project5 ,
    description: "A TikTok-inspired social platform combining food discovery with seamless ordering capabilities. Built with the MERN stack (MongoDB, Express.js, React, Node.js), Zingr features dual authentication for users and restaurant partners, vertical auto-playing video reels showcasing dishes, and integrated food ordering functionality. Implemented JWT-based authentication with role-based access control, social interactions (likes, saves, comments), and ImageKit CDN for media storage. Optimized video playback using IntersectionObserver API and designed RESTful APIs with secure middleware. Deployed on Vercel with microservices architecture, enabling users to discover restaurants through engaging content and place orders directly within the platform.",
    technologies: ["React.js", "React Router", "Vite", "Axios", "Node.js", "Express.js", "MongoDB", "ImageKit"],
    github:"https://github.com/0Aryan1/Zingr" ,
    demo: "https://zingr-eta.vercel.app/register",
  },

  {
    title:"DealDrop" ,
    image: project6,
    description: "DealDrop is an intelligent price tracking platform that helps users save money by monitoring product prices across e-commerce websites. Built with Next.js 16 and React 19, it leverages Firecrawl API for automated web scraping to extract real-time pricing data from dynamic websites. The application uses Supabase for secure authentication and PostgreSQL database management, storing historical price trends visualized through interactive Recharts graphs. Serverless cron jobs continuously monitor tracked products and send instant email alerts via Resend API when prices drop. With a responsive Tailwind CSS interface and OAuth integration, DealDrop transforms passive shopping into proactive savings.",
    technologies: ["Next.js", "React", "Supabase", "Firecrawl API", "Resend", "Recharts"],
    github: "https://github.com/0Aryan1/DealDrop",
    demo: "https://deal-drop-jade.vercel.app/",
  },

  {
    title: "The Jargonaut",
    image: project3,
    description:
      "The Jargonaut is a blog-style web application focused on exploring topics in corporate law, pop culture, and related analytical content. It appears to offer articles that interpret legal concepts through cultural and practical lenses for readers seeking insights and commentary on legal issues in everyday life.",
    technologies: ["React.js", "Appwrite", "Redux Toolkit", "React Hook Form", "TinyMCE"],
    github: "https://github.com/0Aryan1/JARGONAUT",
    demo: "https://www.thejargonaut.in.net/"
  },


  {
    title: "VIFS",
    image: project2,
    description:
      "Developed a web app for sharing GIFs, stickers, and memes with one-tap downloads and personal libraries. Built a responsive UI with Tailwind CSS, integrated APIs with CORS handling, and achieved 1000+ users.",
    technologies: ["HTML", "TailwindCSS","React", "JavaScript"],
    github: "https://github.com/0Aryan1/VIFSS_APP",
    demo: "https://vifss-app-918n.vercel.app"
  },
  {
    title: "Movie Hub",
    image: project1,
    description:
      "Developed a fully responsive movie and TV show web app using React and Material UI. Integrated TMDB API to enable dynamic search, filtering (trending, type), and trailer viewing. Enhanced UI/UX with React Alice Carousel for interactive content browsing.",
    technologies: ["HTML","TailwindCSS","JavaScript", "React", "Material UI", "TMDB API"],
    github: "https://github.com/0Aryan1/Movie-Hub",
    demo: "https://movie-hub-sage-nine.vercel.app"
  },
  
  {
    title: "worq",
    image: project4,
    description:
      "worq is a task management application designed to help users organize and prioritize their tasks effectively. It features a clean and intuitive interface, allowing users to create, edit, and delete tasks with ease. The application also includes a Kanban board for visual task management and supports real-time collaboration.",
    technologies: ["HTML", "JavaScript","React","Tailwind","Context-Api"],
    github: "hhttps://github.com/0Aryan1/Employee-Management-System",
  }
];

export const CONTACT = {
  address: "NOIDA - UP, INDIA ",
  phoneNo: "+91 8273910765 ",
  email: "aryanagrawal0102@gmail.com",
};
