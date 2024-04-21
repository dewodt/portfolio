import { defineField } from "sanity";

export const imagePreviewField = defineField({
  name: "imagePreview",
  title: "Image Preview",
  type: "image",
  description:
    "Upload image preview (will be used in cards, recommended 3:5 aspect ratio)",
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
    Rule.required().assetRequired().error("Image preview is required."),
});
