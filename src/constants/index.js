import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


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
  {
    year: "May,2025 - June",
    role: "Frontend Developer",
    company: "Vhyxara",
    description: `Built a dynamic Link-in-bio tool for influencers and public figures using Next.js and TypeScript. Implemented subscription-based features with three plan tiers and RBAC for secure role-based access control. Focused on responsive UI and seamless user experience across devices.`,
    technologies: ["HTML", "TailwindCSS","TypeScript","Next.js","RBAC"],
  },
];

export const PROJECTS = [
  {
    title: "Movie Hub",
    image: project1,
    description:
      "Developed a fully responsive movie and TV show web app using React and Material UI. Integrated TMDB API to enable dynamic search, filtering (trending, type), and trailer viewing. Enhanced UI/UX with React Alice Carousel for interactive content browsing.",
    technologies: ["html","TailwindCSS","JavaScript", "React", "Material UI", "TMDB API"],
  },
  {
    title: "Employee Management System",
    image: project2,
    description:
      "Built a dual-dashboard web app (Admin & Employee) to streamline task assignment and progress tracking. Enabled employees to accept/reject tasks and view categorized statuses: assigned, completed, failed, pending. Used browser Local Storage for state persistence without backend dependency.",
    technologies: ["HTML", "TailwindCSS","React", "JavaScript"],
  },
  {
    title: "City Tour Optimization",
    image: project3,
    description:
      "Optimized travel routes using Dijkstra’s algorithm in C++, cutting compute time by 600ms. Used Linked Lists, Hash Tables, Trees, and Graphs for dynamic routing and booking management. Enhanced data handling with search/sort algorithms and exception handling.",
    technologies: ["HTML","CSS","JavaScript", "Data Structures", "Algorithms"],
  }
];

export const CONTACT = {
  address: "NOIDA - UP, INDIA ",
  phoneNo: "+91 8273910765 ",
  email: "aryan.official2k22@gmail.com",
};
