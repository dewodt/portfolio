import awards from "./awards";
import blog from "./blog";
import { homeSchema } from "./home";
import { projectsSchema } from "./projects";
import { experienceSchema } from "./experience";

export const schemaTypes = [
  homeSchema,
  projectsSchema,
  experienceSchema,
  awards,
  blog,
];
