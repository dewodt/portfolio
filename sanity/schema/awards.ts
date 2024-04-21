import { titleField } from "./../fields/title";
import { defineType } from "sanity";
import { contentField } from "../fields/content";
import { getFormattedDate } from "@/lib/utils";
import { issuerField } from "../fields/issuer";
import { dateField } from "../fields/date";
import { descriptionField } from "../fields/description";

export const awardsSchema = defineType({
  name: "awards",
  title: "Awards",
  type: "document",
  fields: [titleField, descriptionField, issuerField, dateField, contentField],
  preview: {
    select: {
      title: "title",
      issuer: "issuer",
      date: "date",
    },
    prepare({ title, issuer, date }) {
      const formattedDate = getFormattedDate(date as string);
      const subtitle = `${issuer} | ${formattedDate}`;

      return {
        title,
        subtitle,
      };
    },
  },
});
