import { defineArrayMember, defineField, defineType } from "sanity";
import { SocialPreview } from "../components/preview/social-preview";
import { imageField } from "../fields/image";
import { stringField } from "../fields/string-field";
import { urlField } from "../fields/url-field";

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
        defineArrayMember({
          name: "socialLink",
          title: "Social Link",
          type: "object",
          fields: [
            stringField({
              name: "name",
              title: "Name",
              description: "Display name / aria-label (e.g., GitHub)",
              validation: { required: true },
            }),
            urlField({
              name: "url",
              title: "URL",
              description:
                "The link URL (supports http, https, mailto, and tel)",
              validation: {
                required: true,
                schemes: ["http", "https", "mailto", "tel"],
              },
            }),
            imageField({
              name: "iconLight",
              title: "Icon (Light)",
              description: "Icon displayed in light mode (recommended: SVG)",
              options: { accept: "image/svg+xml" },
              validation: { required: true },
            }),
            imageField({
              name: "iconDark",
              title: "Icon (Dark)",
              description: "Icon displayed in dark mode (recommended: SVG)",
              options: { accept: "image/svg+xml" },
              validation: { required: true },
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
        }),
      ],
    }),
  ],
});
