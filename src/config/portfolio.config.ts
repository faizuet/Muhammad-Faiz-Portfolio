import { MuhammadFaizPortrait } from "@assets/images";
import GithubIconRaw from "@assets/SVGs/Github.svg?raw";
import LinkedinIconRaw from "@assets/SVGs/Linkedin.svg?raw";
import { LogoIcon } from "@/assets/SVGs";
import { ThemeOptions } from "../../scripts/generateThemes";

export const themeConfig = ThemeOptions.DEFAULT;

// Add the production domain here once it has been selected. Keeping it unset
// avoids publishing the template author's domain as this site's canonical URL.
export const siteConfig = {
    title: "Muhammad Faiz | Cloud & Backend Engineer",
    description: "Muhammad Faiz is a Cloud and Backend Engineer with 1+ year of experience deploying Python applications on AWS and Linux.",
    keywords: "Muhammad Faiz, Cloud Engineer, Backend Engineer, Python, FastAPI, Flask, PostgreSQL, AWS, Docker, Nginx, Linux",
    avatar: MuhammadFaizPortrait.src,
    siteUrl: undefined as string | undefined,
};

export const headerConfig = {
    logotext: "Muhammad Faiz",
    actionButton: { text: "Download Resume", url: "/Muhammad-Faiz-Resume.pdf" },
};

export const heroConfig = {
    salutation: "Hello, my name is",
    firstName: "Muhammad",
    lastName: "Faiz.",
    position: "Cloud & Backend Engineer",
    tagLine: {
        prefixText: "I deploy",
        highlightedText: "production applications",
        suffixText: "on AWS and Linux.",
    },
    avatar: MuhammadFaizPortrait,
    links: [
        { label: "GitHub", url: "https://github.com/faizuet", icon: GithubIconRaw },
        { label: "LinkedIn", url: "https://linkedin.com/in/muhammad-faiz-backend", icon: LinkedinIconRaw },
    ],
};

export const aboutConfig = {
    aboutAvatar: MuhammadFaizPortrait,
    description: [
        "I’m Muhammad Faiz, a Cloud and Backend Engineer with 1+ year of professional experience. I work as a Backend Software Engineer at NexVolt Solutions, where I deploy and maintain production applications on AWS.",
        "I build services with Python, FastAPI, and Flask, and I work with PostgreSQL, Docker, Nginx, Ubuntu Linux, and CI/CD. Before this role, I completed a Backend Engineering Internship at Wanclouds Inc. and a Python Backend Internship at Go Jins.",
    ],
};

export const footerConfig = {
    logo: LogoIcon,
    title: "Muhammad Faiz | Portfolio",
    links: [
        { label: "GitHub", url: "https://github.com/faizuet", icon: GithubIconRaw },
        { label: "LinkedIn", url: "https://linkedin.com/in/muhammad-faiz-backend", icon: LinkedinIconRaw },
    ],
};
