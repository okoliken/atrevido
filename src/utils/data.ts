import type { Work, Project } from "$lib/types";
import Netflix from "$lib/assets/net.png";
import EWA from "$lib/assets/ewa.png";
import Ksbtech from "$lib/assets/ksbtech.png";
import Oracle from "$lib/assets/oracle.png";
import Coded from "$lib/assets/coded.png";
import Dictionary from "$lib/assets/dictionary.png";
import Dev from "$lib/assets/dev.png";
import AudioPhile from "$lib/assets/audio.png"

export const workHistory: Work[] = [
  {
    duration: "Feb 2024 - Present",
    role: "Frontend Engineer",
    companyName: "Sterling Financial Holdings Company",
    url: "https://sterling.ng/",
    description:
      "I collaborate within a large, dynamic team of frontend and backend developers, product managers, and QA testers. Our focus is on developing features that align with precise product requirements, contributing to the creation of a pioneering core banking application. It's a privilege to be part of a team dedicated to innovation in the banking sector, working on a project that is the first of its kind.",
    stacks: [
      "TypeScript",
      "React",
      "Tailwind Css",
      "Front-end microservices",
      "Formik",
      "Redux Toolkit Query",
      "Headless UI",
      "Jira",
      "Core-Banking Application"
    ],
  },
    {
      duration: "Feb 2022 - Feb 2024",
      role: "Frontend Engineer",
      companyName: "Fundall",

      url: "https://fundall.io",
      description:
        "As a Frontend Developer at Fundall, a fintech firm dedicated to enhancing financial services for both individuals and businesses, I played a key role in improving user experiences through the design and implementation of web application features. My efforts led to a significant decrease in user-reported issues by effectively addressing technical problems. Additionally, I spearheaded the successful launch of vital features for two major corporate clients, significantly boosting their financial operations.",
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
    {
      duration: "Feb - May 2023",
      role: "Frontend Engineer",
      companyName: "Soft-Web Digital",
      url: "https://www.softwebdigital.com",
      description:
        "At Softweb Digital, I was part of a collaborative development team focused on refining and maintaining client-facing frontend platforms, which led to a 50% enhancement in business operations. My deep understanding of user needs contributed to a 47% increase in revenue. Additionally, I played a crucial role in the launch of the KBSTECH gift card trading platform, demonstrating a commitment to innovation and client satisfaction.",
      stacks: ["JavaScript", "TypeScript", "Vue 3", "Vuetify", "SCSS", "Figma"],
    },
    {
      duration: "Oct 2022 - 2023",
      role: "Frontend Engineer",
      companyName: "Scelloo",
      url: "https://scelloo.com",
      description:
        "At Scelloo, a technology company focused on supporting entrepreneurs and organizations, I worked alongside my team and QA testers to meet project deadlines consistently, leveraging Agile methodologies and tools like Jira to ensure efficiency and collaboration.",
      stacks: ["JavaScript", "Vue 2", "Tailwind", "Jira", "Figma"],
    },
  ];
  export const projects: Project[] = [
    {
      title: "Emerging Wealth",
      growth: [],
      url: "https://eaaml.emergingafricagroup.com/",
      description:
        "We are with you every step of the way in building the financial freedom and wealth you aspire to",
      stacks: ["Nuxt2", "JavaScript", "Vuetify", "Vuex", "API"],
      image: EWA,
    },

    {
      title: "Coded Events",
      growth: [],
      url: "https://codedevents.com/",
      description:
        "A digital event platform that helps you manage your events more efficiently and save costs on printing.",
      stacks: ["Vue 3", "SCSS", "Pinia"],
      image: Coded,
    },
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
      title: "Netflix clone",
      growth: [],
      url: "https://netflix-ts-nine.vercel.app/",
      description:
        "Netflix clone - this endeavor aimed to replicate the beloved features of the popular streaming platform, while also adding some unique touches",
      stacks: [
        "Vue 3",
        "Typescript",
        "Tailwind css",
        "Pinia",
        "Tmdb API",
        "App Write",
      ],
      image: Netflix,
    },
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
		"Appwrite"
      ],
      image: Dev,
    },
    {
      title: "Audiophile - e-commerce website",
      growth: [],
      url: "https://dev-links-wine.vercel.app/",
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
  ];