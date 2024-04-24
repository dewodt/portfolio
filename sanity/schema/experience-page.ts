import { titleField } from "../fields/title";
import { defineType } from "sanity";
import { descriptionField } from "../fields/description";

export const experiencePageSchema = defineType({
  name: "experience-page",
  title: "Experience Page",
  type: "document",
  fields: [titleField, descriptionField],
});
