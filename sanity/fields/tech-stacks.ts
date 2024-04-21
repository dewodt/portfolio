import { defineField } from "sanity";

export const techStacksField = defineField({
  name: "techStacks",
  title: "Tech Stacks",
  description: "Insert tech stacks",
  type: "array",
  of: [
    {
      name: "techStack",
      title: "Tech Stack",
      description: "Insert tech stack",
      type: "string",
      validation: (Rule) => Rule.required().error("A tech stack is required"),
    },
  ],
  validation: (Rule) => Rule.required().error("Tech stacks are required"),
});
