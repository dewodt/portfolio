import { defineField } from "sanity";

// Title with no character limit
export const longTitleField = defineField({
  name: "title",
  title: "Title",
  description: "Insert title for this schema",
  type: "string",
  validation: (Rule) =>
    Rule.required().error("Title is required for the document"),
});
