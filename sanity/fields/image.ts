import { defineField } from "sanity";

export const imageField = defineField({
  name: "image",
  title: "Image",
  type: "image",
  description: "An image to be displayed for the document.",
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alt Text",
      description: "Describe the image for screen readers",
      validation: (Rule) =>
        Rule.required().error("Alt text is required for the image"),
    },
  ],
  validation: (Rule) =>
    Rule.required().assetRequired().error("Image is required"),
});
