import { defineField } from "sanity";

export const skillsSectionTitleField = defineField({
  name: "skillsSectionTitle",
  title: "Skills Section Title",
  description:
    "The main title for the skills section (e.g., 'Tools & Technologies')",
  type: "string",
  validation: (Rule) =>
    Rule.required().error("Skills section title is required"),
});
