import { defineField } from "sanity";

export const companyField = defineField({
  name: "company",
  title: "Company",
  description: "Insert company name",
  type: "string",
  validation: (Rule) => Rule.required().error("Company name is required"),
});
