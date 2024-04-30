import { defineType } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { titleField } from "./../fields/title";
import { contentField } from "../fields/content";
import { issuerField } from "../fields/issuer";
import { dateField } from "../fields/date";
import { descriptionField } from "../fields/description";
import { slugField } from "../fields/slug";
import { AwardsIcon } from "../components/icon/awards-icon";
import { imageField } from "../fields/image";

export const awardsSchema = defineType({
  name: "awards",
  title: "Awards",
  type: "document",
  fields: [
    imageField,
    titleField,
    slugField,
    descriptionField,
    issuerField,
    dateField,
    contentField,
  ],
  icon: AwardsIcon,
  preview: {
    select: {
      title: "title",
      issuer: "issuer",
      date: "date",
      media: "image",
    },
    prepare({ title, issuer, date, media }) {
      const formattedDate = getFormattedDate(date as string);
      const subtitle = `${issuer} | ${formattedDate}`;

      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
