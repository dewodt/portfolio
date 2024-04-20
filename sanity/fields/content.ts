import { HighlightIcon } from "@sanity/icons";
import { defineField } from "sanity";
import { RenderHighlight } from "../render/highlight";

export const contentField = defineField({
  name: "content",
  title: "Content",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          {
            title: "Highlight",
            value: "highlight",
            icon: HighlightIcon,
            component: RenderHighlight,
          },
        ],
      },
    },
  ],
  description: "Insert a content portable text for the document!",
  validation: (Rule) =>
    Rule.required().error("A content is required for the document"),
});
