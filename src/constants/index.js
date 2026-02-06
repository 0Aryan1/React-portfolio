import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";




export const ABOUT_TEXT = `I'm a fullstack developer and engineering student with a strong foundation in data structures and algorithms, and hands-on experience in full stack development. I've interned at Swapple Solutions and Vhyxara, working from init to deployment—building responsive UIs, integrating RESTful APIs, and implementing secure RBAC systems. My projects like City Tour Optimization and Movie Hub showcase my problem-solving skills and algorithmic thinking. I work with technologies like React, Next.js, Node.js, and MongoDB, and I'm passionate about building efficient, user-focused web applications. I thrive in collaborative teams and enjoy exploring new technologies and contributing to open-source.`;

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
  email: "aryanagrawal16ar@gmail.com",
};
