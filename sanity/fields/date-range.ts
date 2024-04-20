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
      description: "Insert project start date (YYYY-MM)",
      type: "date",
      validation: (Rule) =>
        Rule.required().error("A start date is required"),
      options: {
        dateFormat: "YYYY-MM",
      },
    },
    {
      name: "endDate",
      title: "End Date",
      description: "Insert project end date (YYYY-MM)",
      type: "date",
      validation: (Rule) =>
        Rule.custom((endDate: Date, context) => {
          const startDate = context.document?.startDate as Date;

          if (endDate < startDate) {
            return "End date must be after start date";
          }

          return true;
        }),
      options: {
        dateFormat: "YYYY-MM",
      },
    },
  ],
});
