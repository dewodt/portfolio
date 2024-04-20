import { defineField } from "sanity";

export const photoField = defineField({
  name: "photo",
  title: "Photo",
  type: "image",
  description:
    "Upload a photo of yourself! Photo will be displayed 1:1 aspect ratio on the website.",
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alt Text",
      description: "Describe the photo for screen readers",
      validation: (Rule) =>
        Rule.required().error("Alt text is required for the photo"),
    },
  ],
  validation: (Rule) =>
    Rule.required()
      .assetRequired()
      .error("A photo is required for the home page"),
});
