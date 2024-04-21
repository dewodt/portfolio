import { defineField } from "sanity";

export const issuerField = defineField({
  name: "issuer",
  title: "Issuer",
  description: "Insert issuer name",
  type: "string",
  validation: (Rule) => Rule.required().error("Issuer name is required"),
});
