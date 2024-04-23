import { defineField } from "sanity";

export const dateField = defineField({
  name: "date",
  title: "Date",
  description: "Insert date",
  type: "date",
  validation: (Rule) => Rule.required().error("Date is required"),
});
