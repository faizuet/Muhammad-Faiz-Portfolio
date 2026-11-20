import { MuhammadFaizPortrait } from "@assets/images";
import GithubIconRaw from "@assets/SVGs/Github.svg?raw";
import LinkedinIconRaw from "@assets/SVGs/Linkedin.svg?raw";
import EmailIconRaw from "@assets/SVGs/Gmail.svg?raw";
import { LogoIcon } from "@/assets/SVGs";
import { ThemeOptions } from "../../scripts/generateThemes";

export const themeConfig = ThemeOptions.DEFAULT;

// Add the production domain here once it has been selected. Keeping it unset
// avoids publishing the template author's domain as this site's canonical URL.
export const siteConfig = {
    title: "Muhammad Faiz | Backend & Cloud Engineer",
    description: "Muhammad Faiz is a Backend and Cloud Engineer with 1+ year of experience building Python APIs and cloud applications.",
    keywords: "Muhammad Faiz, Backend Engineer, Cloud Engineer, Python, FastAPI, Flask, PostgreSQL, AWS, Docker, Linux",
    avatar: MuhammadFaizPortrait.src,
    siteUrl: undefined as string | undefined,
};

export const headerConfig = {
    logotext: "Muhammad Faiz",
    actionButton: { text: "Download Resume", url: "/Cloud-Devops..pdf" },
};

export const heroConfig = {
    salutation: "Hello, my name is",
    firstName: "Muhammad",
    lastName: "Faiz.",
    position: "Backend & Cloud Engineer",
    tagLine: {
        prefixText: "I build",
        highlightedText: "Backend Systems",
        suffixText: "for cloud applications.",
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
        "I’m Muhammad Faiz, a Backend and Cloud Engineer with 1+ year of professional experience building Python services and APIs.",
        "My work includes backend development with FastAPI and Flask, relational databases and Redis, and deploying applications on AWS. I also work with Linux, Docker, Nginx, and CI/CD workflows, and integrate AI/ML capabilities into backend applications.",
    ],
};

export const footerConfig = {
    logo: LogoIcon,
    title: "Muhammad Faiz | Portfolio",
    links: [
        { label: "GitHub", url: "https://github.com/faizuet", icon: GithubIconRaw },
        { label: "LinkedIn", url: "https://linkedin.com/in/muhammad-faiz-backend", icon: LinkedinIconRaw },
        { label: "Email", url: "mailto:faizuet7@gmail.com", icon: EmailIconRaw },
    ],
};
