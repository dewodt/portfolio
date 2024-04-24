import { descriptionField } from "../fields/description";
import { titleField } from "./../fields/title";
import { defineType } from "sanity";

export const blogPageSchema = defineType({
  name: "blog-page",
  title: "Blog Page",
  type: "document",
  fields: [titleField, descriptionField],
});
