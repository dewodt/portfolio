import { HighlightIcon, ImageIcon } from "@sanity/icons";
import { defineField } from "sanity";
import { RenderHighlight } from "../render/highlight";

export const contentField = defineField({
  name: "content",
  title: "Content",
  type: "array",
  of: [
    {
      type: "block",

      // Remove small headings
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Blockquote", value: "blockquote" },
      ],

      // Default lists
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],

      // Custom marks
      marks: {
        decorators: [
          // Default
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },

          // Addition
          {
            title: "Highlight",
            value: "highlight",
            icon: HighlightIcon,
            component: RenderHighlight,
          },
        ],
        annotations: [
          {
            name: "internalLink",
            title: "Internal Link",
            type: "object",
            fields: [
              {
                name: "reference",
                title: "Reference",
                type: "reference",
                to: [
                  { type: "projects" },
                  { type: "experience" },
                  { type: "awards" },
                  { type: "blog" },
                ],
              },
            ],
            validation: (Rule) =>
              Rule.required().error("Reference is required"),
          },
          {
            name: "externalLink",
            title: "External Link",
            type: "object",
            fields: [
              {
                name: "url",
                title: "URL",
                type: "url",
              },
            ],
            validation: (Rule) =>
              Rule.required().error("External URL is required"),
          },
        ],
      },
    },
    {
      type: "image",
      icon: ImageIcon,
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for screen readers",
          validation: (Rule) =>
            Rule.required().error("Alt text is required for the image"),
        },
      ],
      validation: (Rule) => Rule.required().error("An image is required"),
    },
  ],
  description: "Insert a content portable text!",
  validation: (Rule) => Rule.required().error("A content is required"),
});
