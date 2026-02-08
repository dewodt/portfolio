import { defineField } from "sanity";

export const locationField = defineField({
  name: "location",
  title: "Location",
  description: "Your current location (e.g., Jakarta, Indonesia)",
  type: "string",
  validation: (Rule) => Rule.required().error("Location is required"),
});
