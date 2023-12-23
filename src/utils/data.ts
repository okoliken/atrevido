import type { Work, Project } from "$lib/types";
import Netflix from "$lib/assets/net.png";
import EWA from "$lib/assets/ewa.png";
import FundallBus from "$lib/assets/fbus.png";
import FundallWebApp from "$lib/assets/fundall-web-app.png";
import FundallWeb from "$lib/assets/fundall-website.png";
import Ksbtech from "$lib/assets/ksbtech.png";
import Oracle from "$lib/assets/oracle.png";
import Coded from "$lib/assets/coded.png";
import Dictionary from "$lib/assets/dictionary.png";

import Eaca from "$lib/assets/eaca.png";
import Eat from "$lib/assets/eat.png";
import Dev from "$lib/assets/dev.png";


export const workHistory: Work[] = [
    {
      duration: "2022 - Present",
      role: "Frontend Developer",
      companyName: "Fundall",

      url: "https://fundall.io",
      description:
        "As a Frontend Developer at Fundall, a fintech firm specializing in financial services for individuals and businesses, I have significantly enhanced user experiences by designing and deploying web application features. I have also been instrumental in resolving technical issues, resulting in a notable reduction in user-reported problems. Furthermore, I successfully led the production launch of crucial features for two prominent corporate clients, thereby augmenting their financial capabilities.",
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
      role: "Frontend Developer",
      companyName: "Soft-Web Digital",
      url: "https://www.softwebdigital.com",
      description:
        "Enhanced Coded Events website, introducing client-aligned functionalities. Integrated Flutterwave payment, fixing platform issues. Optimized KBSTECH's admin platform, improving business operations by 50%. Increased revenue by 47% by understanding user needs.",
      stacks: ["JavaScript", "TypeScript", "Vue 3", "Vuetify", "SCSS", "Figma"],
    },
    {
      duration: "Oct 2022 - 2023",
      role: "Frontend Developer",
      companyName: "Scelloo",
      url: "https://scelloo.com",
      description:
        "At Scelloo, a technology company dedicated to empowering entrepreneurs and organizations, I collaborated with my team and QA testers to consistently meet project deadlines using Agile tools like Jira",
      stacks: ["JavaScript", "Vue 2", "Tailwind", "Jira", "Figma"],
    },
  ];
  export const projects: Project[] = [
    {
      title: "Fundall Website",
      growth: [],
      url: "https://fundall.io/",
      description:
        "Digitizing finance for Business Partners, Organisations, SME, Students. Access tools, education, and business support you need to start, manage and improve your financial lifestyle.",
      stacks: ["JavaScript", "Nuxt 2", "Vuetify", "Tailwind css", "SEO"],
      image: FundallWeb,
    },
    {
      title: "Fundall for individual",
      growth: [],
      url: "https://app.fundall.io/",
      description:
        "Spend, save, receive money, create budgets, make online payments and invest in Dollars on a single platform.",
      stacks: ["JavaScript", "Nuxt 2", "Vuetify", "SCSS", "Vuex"],
      image: FundallWebApp,
    },
    {
      title: "Fundall for business",
      growth: [],
      url: "https://eaaml.emergingafricagroup.com/",
      description:
        "A secured platform that helps you grow your business through tailored automated savings, affordable loans etc.",
      stacks: ["JavaScript", "Nuxt 2", "Vuetify", "SCSS", "Vuex"],
      image: FundallBus,
    },
    {
      title: "Emerging Africa Legacy",
      growth: [],
      url: "https://eatrustees.emergingafricagroup.com/",
      description:
        "An application that allows you to create estate plan as well as grow and protect your estate",
      stacks: ["Nuxt2", "JavaScript", "Vuetify", "Vuex", "API"],
      image: Eat,
    },
    {
      title: "Emerging Africa Capital Advisory",
      growth: [],
      url: "https://eacadvisory.emergingafricagroup.com/",
      description:
        "Own a share of a company and increase your wealth with the best deals. Emerging Africa Capital Advisory provides you with top business deals across different sectors.",
      stacks: ["Nuxt2", "JavaScript", "Vuetify", "Vuex", "API"],
      image: Eaca,
    },
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
  ];