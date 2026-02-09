import { defineField, defineType } from "sanity";
import { SocialPreview } from "../components/preview/social-preview";

export const socialsSchema = defineType({
  name: "socials",
  title: "Socials",
  type: "document",
  preview: {
    prepare() {
      return { title: "Socials" };
    },
  },
  fields: [
    defineField({
      name: "socialLinks",
      title: "Social Links",
      description: "List of social media links displayed in the social bar",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              description: "Display name / aria-label (e.g., GitHub)",
              type: "string",
              validation: (Rule) => Rule.required().error("Name is required"),
            }),
            defineField({
              name: "url",
              title: "URL",
              description: "The link URL (supports http, https, and mailto)",
              type: "url",
              validation: (Rule) =>
                Rule.required()
                  .uri({ scheme: ["http", "https", "mailto"] })
                  .error("A valid URL is required"),
            }),
            defineField({
              name: "iconLight",
              title: "Icon (Light)",
              description: "Icon displayed in light mode (recommended: SVG)",
              type: "image",
              options: { accept: "image/svg+xml" },
              validation: (Rule) =>
                Rule.required().error("Light icon is required"),
            }),
            defineField({
              name: "iconDark",
              title: "Icon (Dark)",
              description: "Icon displayed in dark mode (recommended: SVG)",
              type: "image",
              options: { accept: "image/svg+xml" },
              validation: (Rule) =>
                Rule.required().error("Dark icon is required"),
            }),
          ],
          components: {
            preview: SocialPreview,
          },
          preview: {
            select: {
              title: "name",
              subtitle: "url",
              iconLight: "iconLight",
              iconDark: "iconDark",
            },
          },
        },
      ],
    }),
  ],
});
