import { imageField } from "../fields/image";
import { defineType } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { contentField } from "../fields/content";
import { titleField } from "../fields/title";
import { descriptionField } from "../fields/description";
import { dateField } from "../fields/date";
import { slugField } from "../fields/slug";

export const blogSchema = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    imageField, // for image preview
    titleField,
    slugField,
    descriptionField,
    dateField,
    contentField,
  ],
  icon: () => "📝",
  preview: {
    select: {
      title: "title",
      startDate: "dateRange.startDate",
      endDate: "dateRange.endDate",
      media: "imagePreview",
    },
    prepare({ title, startDate, endDate, media }) {
      // XXX YYYY
      const start = getFormattedDate(startDate as string);
      let subtitle = `${start}`;
      if (endDate) {
        const end = getFormattedDate(endDate as string);
        subtitle += ` — ${end}`;
      }

      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
