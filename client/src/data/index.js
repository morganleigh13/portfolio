import { FaDharmachakra } from "react-icons/fa";
import { GiBubbles, GiJewelCrown, GiSpaceSuit } from "react-icons/gi";
import { ImBlogger2 } from "react-icons/im";
import { LuHandHeart } from "react-icons/lu";
import { SiFoodpanda } from "react-icons/si";
import { SiOllama } from "react-icons/si";


export const reviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'people/girlBlonde.jpg',
    review:
      'Working with Morgan was a fantastic experience. She transformed our outdated website into a modern, user-friendly platform. Her attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'people/guyProfile.jpg',
    review:
      'Morgan’s expertise in web development is truly impressive. She delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. She’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'people/guyLatino.jpg',
    review:
      'I can’t say enough good things about Morgan. She was able to take our complex project requirements and turn them into a seamless, functional website. Her problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'people/girlMulti.jpg',
    review:
      'Morgan was a pleasure to work with. She understood our requirements perfectly and delivered a website that exceeded our expectations. Her skills in both frontend and backend are top-notch.',
  },
];


export const myProjects = [
  {
    title: 'Tech Talk - Blog',
    desc: 'This project focuses on creating a responsive blog website. Below is an overview of what I used in this project along with some notes on future enhancements.',
    subdesc:
      'Login System: Integrated a login system using Passport for authentication, allowing users to securely access their accounts.Search Functionality: On the blogs page, implemented search functionality that queries all fields using regex in the backend, providing dynamic results.Blog Detail: Full blog with options to delete blogs and update if it is your blog or follow other users, add comments, like posts, and more. The system checks if you are already following a user before allowing unfollowing or following actions.',
    href: 'http://192.168.1.27/madams/tech-talk',
    texture: '/websites/recordings/tech-talk.mp4',
    logo: ImBlogger2,
    logoStyle: {
      backgroundColor: '#0d9488',
      border: '0.2px solid #2dd4bf',
      boxShadow: '0px 0px 60px 0px #10b981',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/frameworks/react.svg',
      },
      {
        id: 2,
        name: 'Daisy',
        path: '/frameworks/daisy.jpg',
      },
      {
      id: 3,
        name: 'RTK',
        path: '/frameworks/redux.svg',
      },
      {
        id: 5, 
        name: 'MongoDB',
        path: '/frameworks/mongodb.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/frameworks/nodejs.png',
      },
    ],
  },
  {
    title: 'Bubbles - socket.io Chat app',
    desc: 'Bubbles is a chat app that allows users to communicate with each other through different channels for different types of developers.',
    subdesc:
      'A chatbot integrated with Ollama, which can help users with their queries and provide information on various topics related to development. Different channels for different types of developers, such as frontend, backend, fullstack, etc. A channel drawer with icons that show how many messages have been added since the last visit, and a toggle to change themes. Signup and ability to change password if forgotten. Shows whether users are currently online or not. Addition of reactions to each message.',
    href: "http://192.168.1.27/madams/bubbles",
    texture: '/websites/recordings/bubbles.mp4',
    logo: GiBubbles,
    logoStyle: {
      backgroundColor: '#18181b',
      border: '0.2px solid #0ea5e9',
      boxShadow: '0px 0px 60px 0px #0891b2',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/frameworks/reactjs.png',
      },
      {
        id: 2,
        name: 'Daisy',
        path: '/frameworks/daisy.jpg',
      },
      {
        id: 3,
          name: 'RTK',
          path: '/frameworks/redux.svg',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/frameworks/mongodb.png',
        },
        {
          id: 5,
          name: 'Node.js',
          path: '/frameworks/nodejs.png',
        },
        {
          id: 6,
          name: 'Ollama',
          path: '/frameworks/llama.jpg',
        },
        {
          id: 7,
          name: 'Faker',
          path: '/frameworks/faker.svg',
        },
    ],
  },
  {
    title: 'Interstellar Spaces - Real Estate Platform',
    desc: 'A Real‑Estate Platform for the Cosmos Interstellar Spaces is a full‑stack web application that lets users browse, compare, and favorite properties located on planets, moons, and orbital habitats outside Earth. They can also contact Listing Agents about specific properties. Built with a modern React stack, the project demonstrates my experience in building scalable, maintainable codebases while keeping the user experience polished and responsive.  There is an admin section that has a dashboard where Listing Agents can manage messages from clients and update properties managed by them.',
    subdesc:
      'A Next‑Gen real‑estate app that uses React + useContext on the front‑end, Passport and Argon2 on the back‑end, and is styled with Tailwind CSS + DaisyUI. It includes a robust login system, dynamic UI components, and a powerful search engine.',
    href: "http://192.168.1.27/madams/interstellar-spaces",
    texture: '/websites/recordings/interstellar-spaces.mp4',
    logo: GiSpaceSuit,
    logoStyle: {
      backgroundColor: '#1e3a8a',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(0, 0, 250, 0.9) 0%, rgba(10, 100, 180, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/frameworks/reactjs.png',
      },
      {
        id: 2,
        name: 'Daisy',
        path: '/frameworks/daisy.jpg',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/frameworks/mongodb.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/frameworks/nodejs.png',
      },
    ],
  },
  {
    title: 'Project You - Project Tracker',
    desc: 'Welcome to Project You, your one-stop website for premade packages that can transform you through plastic surgery, dentistry, working out, life coaches and more! This platform is designed to help users sign up for various services offered by certified professionals in the medical field. Our mission is to provide a safe and convenient environment where users can connect with their preferred service providers while ensuring their privacy and security at all times.',
    subdesc:
      'Employee Signup/Login System, Client and Employee Management System, Tasks Management System, Certification System and much more. Check out my repo for a full ReadMe.',
    href: "http://gitlab.perryville.perseverenow.org/madams/project-you",
    texture: '/websites/recordings/project-you.mp4',
    logo: LuHandHeart,
    logoStyle: {
      backgroundColor: '#5b21b6',
      border: '0.2px solid #581c87',
      boxShadow: '0px 0px 60px 0px #a78bfa',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/frameworks/reactjs.png',
      },
      {
        id: 2,
          name: 'RTK',
          path: '/frameworks/redux.svg',
        },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/frameworks/tailwind.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/frameworks/mongodb.png',
      },
      {
        id: 5,
        name: 'Node.js',
        path: '/frameworks/nodejs.png',
      },
      {
        id: 6,
        name: 'Framer Motion',
        path: '/frameworks/framer.png',
      },
      {
        id: 7,
        name: 'Faker',
        path: '/frameworks/faker.svg',
      },
    ],
  },
  {
    title: 'The Power of Me - Project Managment and eCommerace',
    desc: 'Welcome to The Power of Me, your ultimate destination for mindfulness and spiritual growth! Here at The Power of Me, we offer a variety of yoga, chakra, and meditation classes designed to help you find inner peace, enhance flexibility, and promote overall well-being. We also have an aromatherapy store where you can purchase essential oils. All transactions are secure!!',
    subdesc:
      'Login System: Users can sign up for an account on our website, log in to access their dashboard. User Dashboard: Once logged in users can add and pay for classes that they are enrolled in, remove classes, see purchases from our store. Admin Dashboard: Once admin is established they have their own dashboards where they can do and see the same things as the users. PLus, they can remove users from classes, view all the users according to the classes they are enrolled in and delete users.',
    href: "http://gitlab.perryville.perseverenow.org/madams/the-power-of-me",
    texture: '/websites/recordings/the-power-of-me.mp4',
    logo: FaDharmachakra,
    logoStyle: {
      backgroundColor: '#9d174d',
      border: '0.2px solid #831843',
      boxShadow: '0px 0px 60px 0px #ec4899',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/frameworks/reactjs.png',
      },
      {
        id: 2,
          name: 'RTK',
          path: '/frameworks/redux.svg',
        },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/frameworks/tailwind.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/frameworks/mongodb.png',
      },
      {
        id: 5,
        name: 'Node.js',
        path: '/frameworks/nodejs.png',
      },
      {
        id: 6,
        name: 'Faker',
        path: '/frameworks/faker.svg',
      },
    ],
  },
  {
    title: 'Panda Pack- Project Tracker with Postgres',
    desc: 'Project Tracker is a web application that helps track orders for various recyclable materials. The platform allows admins to place orders, manage employee data, and monitor progress using a D3 chart. Employees can also track their progress and complete tasks.  The platform has different dashboards for admins and employees, with logic to create custom dashboards for different types of employees.',
    subdesc:
      'This app. uses PostgreSQL as the database, Redux Toolkit for state management, JWT and express for authentication, and Argon2 login for password protection.',
    href: "http://192.168.1.27/madams/panda-pack",
    texture: '/websites/recordings/panda-pack.mp4',
    logo: SiFoodpanda,
    logoStyle: {
      backgroundColor: '#9d174d',
      border: '0.2px solid #831843',
      boxShadow: '0px 0px 60px 0px #ec4899',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/frameworks/reactjs.png',
      },
      {
        id: 2,
          name: 'RTK',
          path: '/frameworks/redux.svg',
        },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/frameworks/tailwind.svg',
      },
      {
        id: 7,
        name: 'Daisy',
        path: '/frameworks/daisy.jpg',
      },
      {
        id: 4,
        name: 'Postgres',
        path: '/frameworks/postgres.png',
      },
      {
        id: 5,
        name: 'Node.js',
        path: '/frameworks/nodejs.png',
      },
      {
        id: 6,
        name: 'Faker',
        path: '/frameworks/faker.svg',
      },
    ],
  },

  {
    title: 'Frosting - E-Commerce',
    desc: 'Frosting is an e-commerce site that sells jewelry and purses. The platform allows customers to browse products by category, sort the page by various options, add items to their cart, and remove them from the cart. The platform also features validation for legitimate credit cards, enhancing overall security and trustworthiness.',
    subdesc:
      'It uses RTK, Tailwind, DaisyUI, MongoDB as the database, and Faker to generate fake data. Additionally, there is two-factor authentication for credit card transactions, ensuring a secure payment process.',
    href: "http://192.168.1.27/madams/frosting",
    texture: '/websites/recordings/frosting.mp4',
    logo: GiJewelCrown,
    logoStyle: {
      backgroundColor: '#9d174d',
      border: '0.2px solid #831843',
      boxShadow: '0px 0px 60px 0px #ec4899',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/frameworks/reactjs.png',
      },
      {
        id: 2,
          name: 'RTK',
          path: '/frameworks/redux.svg',
        },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/frameworks/tailwind.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/frameworks/mongodb.png',
      },
      {
        id: 5,
        name: 'Node.js',
        path: '/frameworks/nodejs.png',
      },
      {
        id: 6,
        name: 'Faker',
        path: '/frameworks/faker.svg',
      },
    ],
  },
  {
    title: 'Morgan - AI',
    desc: 'Morgan is a  web‑app that lets you talk to the latest GPT‑based models from a single, modern UI – no signup required, but sign‑up gives you history, favorites, and multiple tabs.',
    subdesc:
      'It uses RTK, Tailwind, DaisyUI, MongoDB as the database and Ollama to connect to the latest models. If you are logged in you can create multiple conversations and sort by conversations or single responses that you have added a favorite tag to.',
    href: "http://192.168.1.27/madams/morgan",
    texture: '/websites/recordings/morgan.mp4',
    logo: SiOllama,
    logoStyle: {
      backgroundColor: '#9d174d',
      border: '0.2px solid #be185d',
      boxShadow: '0px 0px 60px 0px #ec4899',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/frameworks/reactjs.png',
      },
      {
        id: 2,
          name: 'RTK',
          path: '/frameworks/redux.svg',
        },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/frameworks/tailwind.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/frameworks/mongodb.png',
      },
      {
        id: 5,
        name: 'Node.js',
        path: '/frameworks/nodejs.png',
      },
      {
        id: 6,
        name: 'Ollama',
        path: '/frameworks/llama.jpg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    textScale: isSmall ? 1 : isMobile ? 1.5 : isTablet ? 1.9 : 2.2,
    deskPosition : isSmall ? [-4,2,0] : isMobile ? [0, 0, 0] : isTablet ? [0,0,0] : [1,-1, 5],
    deskRotation: isMobile ? [0.2,110,0.0] : isTablet ? [0.2,110,0] : [0.2,110,0],
    cubePosition : isSmall ? [4, -5, 0] : isMobile ? [8,-4,0] : isTablet ? [10, -5, 0] : [14, -4.2, 0],
    reactLogoPosition : isSmall ? [-7,-7, 0] : isMobile ? [25, 4, -6] : isTablet ? [-5, -2, 0] : [12, 3, 0],
    ringPosition : isSmall ? [-5, 7, 0] : isMobile ? [-14, 17, 8]  : isTablet ? [-23, 20, 0] : [-25, 19, 0],
    targetPosition : isSmall
    ? [-2, 0, -10]
    : isMobile
  ? [0,3,0]
  : isTablet 
  ? [6,0,-10] 
  : [-4,1, -10],
   
    }
  }

export const experiences = [
  {
    id: 1,
    name: 'Persevere BootCamp',
    pos: 'Junior Web Developer & TA',
    duration: '2023 - Present',
    title: "Mentored 20+ peers from beginning coders into MERN full stack web developers. Co‑authored a comprehensive class wiki that now serves as the go‑to resource for all future students.",
    icon: '/assets/p.svg',
    animation: 'salute',
    iconBg: "var(--color-base-100)"
  },
  {
    id: 2,
    name: 'Live Streaming Hack-a-thon',
    pos: 'Team Lead',
    duration: 'April 2025',
    title: " Designed a full‑stack Daily‑Check‑In app that earned the “Best Innovation” award during our first ever Hack-a-thon.",
    icon: '/assets/chat.svg',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Senior Developer',
    pos: 'Pair Programming',
    duration:'2025 - 2026',
    title: "Hands on experiance working with and being mentored by a senior developer with over 25+ years of experiance. Updating frameworks such as changing Create React App applications to Vite. Working on a student portal, Wiki and being part of a team to create a donor-tracking CRM.",
    icon: '/assets/hand.svg',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Donor‑Tracking CRM',
    pos: 'Team Member',
    duration:'2025',
    title: "Collaborated with other developers on gitLab to built a CRM for a non‑profit, featuring secure CRUD, pagination, and sortable tables. Integrated role‑based access control and server‑side validation to protect sensitive data. Streamlined the workflow with dynamic filtering and export options.Implemented a reusable Argon2‑protected login component shared across all projects.",
    icon: '/assets/donor.svg',
    animation: 'clapping',
  },
 
 
];
export const items = [
  {
    id: 1,
    color: "#ff0088",
    label: "JavaScript",
    image: "/frameworks/javascript.png",
  },
  { id: 2, color: "#dd00ee", label: "React", image: "/frameworks/react.svg" },
  {
    id: 3,
    color: "#9911ff",
    label: "Redux Toolkit",
    image: "/frameworks/redux.svg",
  },
  {
    id: 4,
    color: "#1d4ed8",
    label: "TailwindCSS",
    image: "/frameworks/tailwind.svg",
  },
  {
    id: 16,
    color: "#dd00ee",
    label: "Bootstrap",
    image: "/frameworks/bootstrap.svg",
  },
  { id: 5, color: "#fbbf24", label: "DaisyUI", image: "/frameworks/daisy.jpg" },
  {
    id: 6,
    color: "#22c55e",
    label: "MongoDB",
    image: "/frameworks/mongodb.png",
  },
  {
    id: 7,
    color: "#a855f7",
    label: "PostgreSQL",
    image: "/frameworks/postgres.png",
  },
  { id: 8, color: "#a1a1aa", label: "Faker", image: "/frameworks/faker.svg" },
  {
    id: 9,
    color: "#16a34a",
    label: "Node.js",
    image: "/frameworks/nodejs.png",
  },
  { id: 10, color: "#be123c", label: "Socket.io", image: "/frameworks/socket-io.svg" },
  { id: 11, color: "#ea580c", label: "gitLab", image: "/frameworks/git.png" },
  { id: 12, color: "#0cdcf7", label: "Agile", image: "/handshake.svg" },
  {
    id: 13,
    color: "#dc2626",
    label: "Three.js",
    image: "/frameworks/threejs.svg",
  },
  {
    id: 14,
    color: "#fcd34d",
    label: "Motion",
    image: "/frameworks/motion.png",
  },
  {
    id: 17,
    color: "#f97316",
    label: "D3",
    image: "/frameworks/d3.svg",
  },
  { id: 15, color: "#52525b", label: "Ollama", image: "/frameworks/llama.jpg" },
];



// export const calculateSizes = (isSmall, isMobile, isTablet) => {
//   return {
//     deskScale : isSmall ? 0.05 : isMobile ? 1 : 0.065,
//     deskPosition : isMobile ? [0, 0, 0] : isTablet ? [0,0,0] : [1,-1, 5],
//     deskRotation: isMobile ? [0.2,110,0.0] : isTablet ? [0.2,110,0] : [0.2,110,0],
//     cubePosition : isSmall ? [4, -5, 0] : isMobile ? [8,-4,0] : isTablet ? [10, -5, 0] : [12, -4, 0],
//     reactLogoPosition : isSmall ? [-7,-7, 0] : isMobile ? [25, 4, -6] : isTablet ? [-5, -2, 0] : [12, 3, 0],
//     ringPosition : isSmall ? [-5, 7, 0] : isMobile ? [-14, 17, 8]  : isTablet ? [-23, 20, 0] : [-25, 19, 0],
//     targetPosition : isSmall
//     ? [-2, 0, -10]
//     : isMobile
//   ? [7,3,0]
//   : isTablet 
//   ? [0,0,-10] 
//   : [-4,1, -10],
   
//     }
//   }