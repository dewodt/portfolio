import awards from "./awards";
import blog from "./blog";
import experience from "./experience";
import { homeSchema } from "./home";
import { projectsSchema } from "./projects";

export const schemaTypes = [
  homeSchema,
  projectsSchema,
  experience,
  awards,
  blog,
];
