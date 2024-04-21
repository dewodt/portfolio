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
      // Default styles

      // Default lists

      // Default link

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
      },
    },
    {
      type: "image",
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
      icon: ImageIcon,
    },
  ],
  description: "Insert a content portable text for the document!",
  validation: (Rule) =>
    Rule.required().error("A content is required for the document"),
});
