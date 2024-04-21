import { defineType } from "sanity";
import { shortTitleField } from "../fields/short-title";
import { contentField } from "../fields/content";
import { photoField } from "../fields/photo";

export const homeSchema = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [shortTitleField, contentField, photoField],
  preview: {
    select: {
      title: "title",
      subtitle: "content.0.children.0.text",
      media: "photo",
    },
  },
});
