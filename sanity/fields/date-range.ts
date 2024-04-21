import { defineField } from "sanity";

export const dateRangeField = defineField({
  name: "dateRange",
  title: "Date Range",
  description: "Insert date range",
  type: "object",
  fields: [
    {
      name: "startDate",
      title: "Start Date",
      description: "Insert start date (YYYY-MM)",
      type: "date",
      validation: (Rule) => Rule.required().error("A start date is required"),
      options: {
        dateFormat: "YYYY-MM",
      },
    },
    {
      name: "endDate",
      title: "End Date",
      description: "Insert end date (YYYY-MM)",
      type: "date",
      validation: (Rule) =>
        Rule.min(Rule.valueOfField("startDate")).error(
          "End date must be after start date",
        ),
      options: {
        dateFormat: "YYYY-MM",
      },
    },
  ],
  validation: (Rule) => Rule.required().error("Date range is required"),
  options: {
    columns: 2,
  },
});
