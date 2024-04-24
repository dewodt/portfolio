import { titleField } from "../fields/title";
import { defineType } from "sanity";
import { descriptionField } from "../fields/description";

export const projectsPageSchema = defineType({
  name: "projects-page",
  title: "Projects Page",
  type: "document",
  fields: [titleField, descriptionField],
});
