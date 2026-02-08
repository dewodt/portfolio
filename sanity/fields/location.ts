import { defineField } from "sanity";

export const locationField = (
  description: string = "Location (e.g., Jakarta, Indonesia)",
) =>
  defineField({
    name: "location",
    title: "Location",
    description: description,
    type: "string",
    validation: (Rule) => Rule.required().error("Location is required"),
  });
