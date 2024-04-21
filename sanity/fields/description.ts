import { defineField } from "sanity";

export const descriptionField = defineField({
  name: "description",
  title: "Description",
  description: "Insert description",
  type: "text",
  validation: (Rule) => Rule.required().error("Description is required"),
});
