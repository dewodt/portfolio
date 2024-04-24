import { titleField } from "../fields/title";
import { defineType } from "sanity";
import { contentField } from "../fields/content";

export const projectsPageSchema = defineType({
  name: "projects-page",
  title: "Projects Page",
  type: "document",
  fields: [titleField, contentField],
});
