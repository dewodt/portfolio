import { defineType } from "sanity";
import { titleField } from "../fields/title";
import { contentField } from "../fields/content";
import { imageField } from "../fields/image";

export const homeSchema = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [titleField, contentField, imageField],
  preview: {
    select: {
      title: "title",
      subtitle: "content.0.children.0.text",
      media: "photo",
    },
  },
});
