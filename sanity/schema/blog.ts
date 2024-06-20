import { imageField } from "../fields/image";
import { defineType } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { contentField } from "../fields/content/content";
import { titleField } from "../fields/title";
import { descriptionField } from "../fields/description";
import { dateField } from "../fields/date";
import { slugField } from "../fields/slug";
import { BlogIcon } from "../components/icon/blog-icon";

export const blogSchema = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    imageField(
      "Image for the card preview, link preview, and first header image (RECOMMENDED SIZE IS 1200x630px + LESS THAN 300kb).",
    ),
    titleField,
    slugField,
    descriptionField,
    dateField,
    contentField,
  ],
  icon: BlogIcon,
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "image",
    },
    prepare({ title, date, media }) {
      // XXX YYYY
      const subtitle = getFormattedDate(date as string);

      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
