import { defineField } from "sanity";

// Title with no character limit
export const longTitleField = defineField({
  name: "title",
  title: "Title",
  description: "Insert title",
  type: "string",
  validation: (Rule) =>
    Rule.required().error("Title is required"),
});
