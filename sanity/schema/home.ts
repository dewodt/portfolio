import { defineType } from "sanity";
import { contentField } from "../fields/content";
import { imageField } from "../fields/image";

export const homeSchema = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [contentField, imageField],
});
