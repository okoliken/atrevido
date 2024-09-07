import type { Work, Project } from "$lib/types";
// import Netflix from "$lib/assets/net.png";
// import EWA from "$lib/assets/ewa.png";
import Ksbtech from "$lib/assets/ksbtech.png";
import Oracle from "$lib/assets/oracle.png";
import Spotify from "$lib/assets/spotify.png";
import Dictionary from "$lib/assets/dictionary.png";
import Dev from "$lib/assets/dev.png";
import AudioPhile from "$lib/assets/audio.png"
import Positivus from "$lib/assets/positivus.png"

export const workHistory: Work[] = [
  {
    duration: "June 03 - Present",
    role: "Frontend Engineer",
    companyName: "Apex Network Limited",
    url: "https://apexnetwork.co",
    description:
    "I currently work as a frontend engineer at Apex Network, a fintech firm providing digital asset commerce, such as cryptocurrency and gift card exchanges. I collaborate with a dynamic team of engineers to build features and improve products, driving revenue and enhancing customer experience.",
    stacks: ["TypeScript", "Vue" ,"Tailwind Css", "GSAP", "Figma", "Nuxt"],
  },
  {
    duration: "Feb 2024 - August 2024",
    role: "Frontend Engineer",
    companyName: "Sterling Financial Holdings Company",
    url: "https://sterling.ng",
    description:
    "I previously worked as a Frontend Engineer at Sterling Bank, developing and enhancing a core banking application using React, TypeScript, and Microfrontend architecture. I collaborated with backend teams to maintain secure data flow, optimized branch transaction features, and utilized Jira for effective task management and team communication.",
    stacks: ["TypeScript", "React.js", "Tailwind", "Jira", "Figma", 'Micro-Frontend', 'Core Banking Solution'],
  },
  {
    duration: "Feb 2022 - Feb 2024",
    role: "Frontend Engineer",
    companyName: "Fundall",

    url: "https://fundall.io",
    description:
      "I played a key role in improving user experiences through the design and implementation of web application features. My efforts led to a significant decrease in user-reported issues by effectively addressing technical problems.",
    stacks: [
      "JavaScript",
      "Nuxt 2",
      "Vuetify",
      "SCSS",
      "Trello",
      "Click up",
      "Figma",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Oracle Films Tv",
    growth: [],
    url: "https://oraclefilms.tv/",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV without paying more.",
    stacks: ["Vue 3", "Typescript", "Tailwind css", "Pinia"],
    image: Oracle,
  },
  {
    title: "KSB Tech",
    growth: [],
    url: "https://ksbtech.com.ng/",
    description: "Buy and sell giftcards and crypto at the best rates.",
    stacks: ["Vue 3", "Typescript", "Tailwind css", "Pinia"],
    image: Ksbtech,
  },
];

export const personal_projects = [
  {
    title: "Online Dictionary",
    growth: [],
    url: "https://sv-dictionary.vercel.app/",
    description:
      "Seamlessly search for words and uncover their meanings, all while enjoying the convenience of features designed to enhance your experience.",
    stacks: [
      "Svelte4",
      "Typescript",
      "Tailwind css",
      "Frontend Mentor",
      "Dictionary API",
    ],
    image: Dictionary,
  },
  {
    title: "Dev Links",
    growth: [],
    url: "https://dev-links-wine.vercel.app/",
    description:
      "Dev Links is a fully-functional link-sharing app for developers It allows developers to share links with each other and preview each other's profiles",
    stacks: [
      "Vue 3",
      "Typescript",
      "Tailwind css",
      "Frontend Mentor",
      "Vee validate",
      "Zod",
      "Appwrite",
      "Composition API"
    ],
    image: Dev,
  },
  {
    title: "Audiophile - e-commerce website",
    growth: [],
    url: "https://audiophile-tawny-tau.vercel.app/",
    description:
      "A multi-page e-commerce website from a Frontend Mentor challenge, showcasing full responsiveness across devices. Implemented a functional cart system leveraging browser local storage, efficient data fetching for products display, and utilized reusable components for scalability and efficiency.",
    stacks: [
      "React",
      "Typescript",
      "Styled Components",
      "Frontend Mentor",
      "SupaBase",
      "Formik",
      "Yup",
      "Farmer Motion",
      "FlutterWave"
    ],
    image: AudioPhile,
  },
  {
    title: "Spotify clone",
    growth: [],
    url: "https://spotify-clone-murex-six.vercel.app/",
    description:
      "This application is powered by Spotify's API and enables users to log into their Spotify accounts. It allows them to access their playlists, discover the latest songs from their favorite artists, and explore many more features.",
    stacks: ["Svelte","SvelteKit", "Typescript", "Sass", "Spotify API"],
    image: Spotify,
  },
  {
    title: "Positivus landing page",
    growth: [],
    url: "#",
    description:
      "build in progress",
    stacks: ["Astro", 'Alpinejs', 'Tailwindcss', 'Figma Community'],
    image: Positivus,
    is_comming: true
  },
];