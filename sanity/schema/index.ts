import { awardsSchema } from "./awards";
import { blogSchema } from "./blog";
import { homeSchema } from "./home";
import { projectsSchema } from "./projects";
import { experienceSchema } from "./experience";

export const schemaTypes = [
  homeSchema,
  projectsSchema,
  experienceSchema,
  awardsSchema,
  blogSchema,
];
