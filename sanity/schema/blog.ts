import { defineType } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { imagePreviewField } from "../fields/image-preview";
import { contentField } from "../fields/content";
import { titleField } from "../fields/title";
import { descriptionField } from "../fields/description";
import { dateField } from "../fields/date";

export const blogSchema = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    imagePreviewField,
    titleField,
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
