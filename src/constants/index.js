import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm a fullstack developer and engineering student with a strong foundation in data structures and algorithms, and hands-on experience in full stack development. I've interned at Swapple Solutions and Vhyxara, working from init to deployment—building responsive UIs, integrating RESTful APIs, and implementing secure RBAC systems. My projects like City Tour Optimization and Movie Hub showcase my problem-solving skills and algorithmic thinking. I work with technologies like React, Next.js, Node.js, and MongoDB, and I'm passionate about building efficient, user-focused web applications. I thrive in collaborative teams and enjoy exploring new technologies and contributing to open-source.`;

export const EXPERIENCES = [
  {
    year: "May,2025 - present",
    role: "Frontend Developer",
    company: "Swapple Solution Pvt. Ltd. ",
    description: `Developed responsive user interfaces using React.js, ensuring optimized performance and seamless user experience. Integrated RESTful APIs from Postman for dynamic data rendering and enhanced frontend-backend communication.`,
    technologies: ["HTML","TailwindCSS","Javascript", "React.js"],
  },
];

export const PROJECTS = [
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
    title: "The Jargonaut",
    image: project3,
    description:
      "The Jargonaut is a blog-style web application focused on exploring topics in corporate law, pop culture, and related analytical content. It appears to offer articles that interpret legal concepts through cultural and practical lenses for readers seeking insights and commentary on legal issues in everyday life.",
    technologies: ["HTML", "JavaScript","React","Tailwind"],
    github: "https://github.com/0Aryan1/JARGONAUT",
    demo: "https://www.thejargonaut.in.net/"
  }
];

export const CONTACT = {
  address: "NOIDA - UP, INDIA ",
  phoneNo: "+91 8273910765 ",
  email: "aryan.official2k22@gmail.com",
};
