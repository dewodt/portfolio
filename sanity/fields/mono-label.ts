import { defineField } from "sanity";

export const monoLabelField = (
  name: string,
  title: string,
  description: string,
) =>
  defineField({
    name,
    title,
    description,
    type: "string",
    validation: (Rule) => Rule.required().error(`${title} is required`),
  });
