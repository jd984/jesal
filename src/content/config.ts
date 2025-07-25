import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    description: z.string(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const resumeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
  }),
});

const skills = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    skills: z.array(z.string()),
  }),
});

export const collections = { work, projects, resumeCollection, skills };
