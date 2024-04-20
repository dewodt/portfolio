import { defineField } from "sanity";

export const techStacksField = defineField({
  name: "techStacks",
  title: "Tech Stacks",
  description: "Insert tech stacks used in the project",
  type: "array",
  of: [
    {
      name: "techStack",
      title: "Tech Stack",
      description: "Insert tech stack",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("A tech stack is required for the project"),
    },
  ],
  validation: (Rule) =>
    Rule.required().error("Tech stacks are required for the project"),
});
