import { defineField } from "sanity";

// Title with character limit (for cards)
export const titleField = defineField({
  name: "title",
  title: "Title",
  description: "Insert title",
  type: "string",
  validation: (Rule) => [
    Rule.required().error("Title is required"),
    Rule.max(30).warning("Title shouldn't be more than 30 characters long"),
  ],
});
