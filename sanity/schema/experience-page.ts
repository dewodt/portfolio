import { titleField } from "../fields/title";
import { contentField } from "../fields/content";
import { defineType } from "sanity";

export const experiencePageSchema = defineType({
  name: "experience-page",
  title: "Experience Page",
  type: "document",
  fields: [titleField, contentField],
});
