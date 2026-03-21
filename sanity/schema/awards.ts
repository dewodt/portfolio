import { defineType } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { contentField } from "../fields/content/content";
import { dateField } from "../fields/date";
import { slugField } from "../fields/slug";
import { AwardsIcon } from "../components/icon/awards-icon";
import { imageField } from "../fields/image";
import { stringField } from "../fields/string-field";
import { textField } from "../fields/text-field";

export const awardsSchema = defineType({
  name: "awards",
  title: "Awards",
  type: "document",
  fields: [
    imageField({
      name: "image",
      title: "Image",
      description:
        "Image for the card preview, link preview, and first header image (RECOMMENDED SIZE IS 1200x630px + LESS THAN 300kb).",
      validation: { required: true },
    }),
    stringField({
      name: "title",
      title: "Title",
      description: "Insert title",
      validation: {
        required: true,
        max: 30,
        maxLevel: "warning",
      },
    }),
    slugField({
      name: "slug",
      title: "Slug",
      description: "The URL path for this document",
      validation: { required: true },
      options: {
        source: (doc) => {
          const awardTitle = doc.title as string;
          const issuer = doc.issuer as string;
          return `${issuer}-${awardTitle}`;
        },
      },
    }),
    textField({
      name: "description",
      title: "Description",
      description: "Insert description",
      validation: { required: true },
    }),
    stringField({
      name: "issuer",
      title: "Issuer",
      description: "Insert issuer name",
      validation: { required: true },
    }),
    dateField({
      name: "date",
      title: "Date",
      description: "Insert date",
      validation: { required: true },
    }),
    contentField({
      name: "content",
      title: "Content",
      description: "Insert a content portable text!",
      validation: { required: true },
    }),
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
