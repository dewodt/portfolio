import { defineField } from "sanity";

// Title with character limit (for cards)
export const shortTitleField = defineField({
  name: "title",
  title: "Title",
  description: "Insert title",
  type: "string",
  validation: (Rule) => [
    Rule.required().error("Title is required"),
    Rule.max(23).error("Title shouldn't be more than 23 characters long"),
  ],
});
