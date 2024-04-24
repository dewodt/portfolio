import { contentField } from "../fields/content";
import { titleField } from "../fields/title";
import { defineType } from "sanity";

export const awardsPageSchema = defineType({
  name: "awards-page",
  title: "Awards Page",
  type: "document",
  fields: [titleField, contentField],
});
