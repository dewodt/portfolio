import { defineField } from "sanity";

export const imageField = (
  description: string = "An image to be displayed.", // Custom helper message for different images
) =>
  defineField({
    name: "image",
    title: "Image",
    type: "image",
    description: description,
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
