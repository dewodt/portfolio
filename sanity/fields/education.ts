import { defineField } from "sanity";

export const educationField = defineField({
  name: "education",
  title: "Education",
  description: "Add your educational background",
  type: "array",
  validation: (Rule) =>
    Rule.required().min(1).error("At least one education entry is required"),
  of: [
    {
      name: "educationItem",
      title: "Education Item",
      type: "object",
      preview: {
        select: {
          title: "degree",
          subtitle: "university",
          media: "image",
        },
      },
      fields: [
        {
          name: "image",
          title: "Institution Logo",
          type: "image",
          description: "Logo of the educational institution",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
              description: "Describe the image for screen readers",
              validation: (Rule: any) =>
                Rule.required().error("Alt text is required for the image"),
            },
          ],
          validation: (Rule: any) =>
            Rule.required().assetRequired().error("Image is required"),
        },
        {
          name: "degree",
          title: "Degree",
          type: "string",
          description: "e.g., Bachelor of Computer Science",
          validation: (Rule: any) =>
            Rule.required().error("Degree is required"),
        },
        {
          name: "university",
          title: "University / Institution",
          type: "string",
          description: "e.g., Universitas Brawijaya",
          validation: (Rule: any) =>
            Rule.required().error("University is required"),
        },
        {
          name: "dateRange",
          title: "Date Range",
          type: "object",
          description: "Start and end dates",
          fields: [
            {
              name: "startDate",
              title: "Start Date",
              description: "Insert start date (YYYY-MM)",
              type: "date",
              validation: (Rule: any) =>
                Rule.required().error("A start date is required"),
              options: {
                dateFormat: "YYYY-MM",
              },
            },
            {
              name: "endDate",
              title: "End Date",
              description:
                "Insert end date (YYYY-MM), leave empty if currently attending",
              type: "date",
              validation: (Rule: any) =>
                Rule.min(Rule.valueOfField("startDate")).error(
                  "End date must be after start date",
                ),
              options: {
                dateFormat: "YYYY-MM",
              },
            },
          ],
          validation: (Rule: any) =>
            Rule.required().error("Date range is required"),
          options: {
            columns: 2,
          },
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          description: "Brief description of your education",
          validation: (Rule: any) =>
            Rule.required().error("Description is required"),
        },
      ],
    },
  ],
});
