import { defineField } from "sanity";

export const galleryField = defineField({
  name: "gallery",
  title: "Gallery",
  description:
    "Insert gallery image (first image will be used as a card preview, if any)",
  type: "array",
  of: [
    {
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the galery image for screen readers",
          validation: (Rule) =>
            Rule.required().error("Alt text is required for the image"),
        },
      ],
    },
  ],
});
