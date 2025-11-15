import { defineField } from "sanity";

export const skillsSectionDescriptionField = defineField({
  name: "skillsSectionDescription",
  title: "Skills Section Description",
  description: "A brief description for the skills section",
  type: "text",
  validation: (Rule) =>
    Rule.required().error("Skills section description is required"),
});
