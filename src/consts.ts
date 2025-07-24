import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jesal Thakur",
  EMAIL: "jesalthakur77984@gmail.com",
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Welcome to Jesal Thakur's personal portfolio website, showcasing projects, work experience.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION:
    "Explore my professional experience, roles, and contributions at various organizations.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Discover a curated selection of my projects, featuring detailed descriptions, repository links, and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://x.com/JesalThakur7",
  },
  {
    NAME: "github",
    HREF: "https://github.com/jd984",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jesalthakur984/",
  },
];
