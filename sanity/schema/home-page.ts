import { titleField } from "../fields/title";
import { defineType } from "sanity";
import { imageField } from "../fields/image";
import { contentField } from "../fields/content";

export const homePageSchema = defineType({
  name: "home-page",
  title: "Home Page",
  type: "document",
  fields: [titleField, contentField, imageField],
});
