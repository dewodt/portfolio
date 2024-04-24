import { defineField } from "sanity";

export const companyField = defineField({
  name: "company",
  title: "Company",
  description: "Insert company data",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Insert the company name",
      validation: (Rule) => Rule.required().error("Company name is required"),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Insert the company logo (be sure it's 1:1)",
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for screen readers",
          validation: (Rule) =>
            Rule.required().error("Alt text is required for the image"),
        },
      ],
      validation: (Rule) => Rule.required().error("Company logo is required"),
    },
  ],
  validation: (Rule) => Rule.required().error("Company data is required"),
});
