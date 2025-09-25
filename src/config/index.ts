import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammad Rajif Al Farikhi — Data Analyst",
  author: "Muhammad Rajif Al Farikhi",
  description:
    "I'm a data enthusiast who's excited to help businesses make smarter decisions. Armed with a strong ability in data cleaning and visualization using SQL and Python, my focus is simple: to turn complex data into strategic information.Ready to collaborate on a data-driven project?",
  lang: "en",
  siteLogo: "/profil.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Threads", href: "https://threads.com/" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/muhammadrajifalfarikhi/" },
    { text: "Github", href: "https://github.com/rajifPy" },
    { text: "Youtube", href: "https://www.youtube.com/" },
    { text: "LYNK", href: "https://lynk.id/cahkuno" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammad Rajif Al Farikhi",
    specialty: "Data Analyst",
    summary:
      "I'm a data enthusiast who's excited to help businesses make smarter decisions. By applying Data Science principles, I focus on one thing: turning complex data into strategic information.Ready to collaborate on a data-driven project?",
    email: "mrajifalfarikhi@gmail.com",
  },
  experience: [
    {
      company: "Information Systems and Digitalization, UNAIR, Surabaya",
      position: "Data Analyst Intern",
      startDate: "Jan 2025",
      endDate: "Feb 2025",
      summary: [
        "Performing data repairs in the database system of Airlangga University's health service unit (RSUA) using SQL to ensure data accuracy and integrity.",
        "where a lot of data cleaning, data duplication in the system, and better database normalization were carriedout.",
      ],
    },
    {
      company: "Bangkit Academy by Google, Tokopedia, Gojek & Traveloka",
      position: "Machine Learning Student",
      startDate: "Feb 2024",
      endDate: "Jun 2024",
      summary: [
        "The Machine Learning Path is one of the three learning tracks offered by Bangkit Academy (alongside Cloud Computing and Mobile Development). It focuses on developing skills in Machine Learning (ML) and Artificial Intelligence (AI), covering everything from foundational concepts to advanced techniques",
      ],
    },
    {
      company: "Social Service Department Media and Information Division, Surabaya",
      position: "Head of Data and Information Subdivision",
      startDate: "Feb 2022",
      endDate: "Dec 2022",
      summary: [
        "Responsible for and managing the design of the organization’s social media accounts",
        "Increased public attention to the organization as seen from an increase in the number of followers onsocial media by 50% social media by 50%.",
        "Organized and coordinated staff in carrying out divisional responsibilitie",
      ],
    },
  ],
  projects: [
    {
      name: "Web Management boarding house",
      summary: "Creating templates to simplify the management of boarding house or rental property businesses ",
      linkPreview: "https://kostsaya.vercel.app/",
      linkSource: "https://github.com/rajifPy/kost",
      image: "/project5.png",
    },
    {
      name: "LoveRegex",
      summary: "A web application that helps users learn and practice regular expressions through interactive exercises and real-time feedback.",
      linkPreview: "https://loveregex.vercel.app/",
      linkSource: "https://github.com/rajifPy/loveregex",
      image: "/Project1.png",
    },
    {
      name: "Dashboard Interactive EAI & ETL",
      summary: "Interactive dashboard with FLASK framework to implement Enterprise Application Integration and ETL with different dataset formats",
      linkPreview: "/",
      linkSource: "https://github.com/rajifPy/",
      image: "/Project2.png",
    },
    {
      name: "Dashboard Interactive Loading Unloading in Main Port Indonesia",
      summary: "Interactive dashboard with FLASK framework to implement loading and unloading processes in the main port of Indonesia",
      linkPreview: "https://web-production-8cc67.up.railway.app/",
      linkSource: "https://github.com/rajifPy/DSBM2",
      image: "/peroject4.png",
    },
    {
      name: "NLP Web App",
      summary: "A web application that utilizes Natural Language Processing (NLP) techniques to analyze text data, providing insights into sentiment and key themes",
      linkPreview: "https://sentimenanalisis.netlify.app/",
      linkSource: "https://github.com/rajifPy/vader_netlify_project_capstone",
      image: "/Project3.png",
    },
  ],
  about: {
    description: `
        Hello, just call me nakama. I love reading the manga One Piece. I was born in Jepara City, the famous city of woodcarving. I love that city; it's beautiful and peaceful. My favorite food is Mie Ayam....
       Life as an adult isn't always fun, but a beautiful life is always worth fighting for. #DontForgetToEat.
    `,
    image: "/album.jpg",
  },
};

// #5755ff
