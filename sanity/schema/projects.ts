import { defineType } from "sanity";
import { contentField } from "../fields/content";
import { repositoryLinksField } from "../fields/repository-links";
import { deploymentLinksField } from "../fields/deployment-links";
import { galleryField } from "../fields/gallery";
import { techStacksField } from "../fields/tech-stacks";
import { shortTitleField } from "../fields/short-title";
import { dateRangeField } from "../fields/date-range";
import { getFormattedDate } from "@/lib/utils";

export const projectsSchema = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    shortTitleField,
    dateRangeField,
    techStacksField,
    repositoryLinksField,
    deploymentLinksField,
    contentField,
    galleryField,
  ],
  preview: {
    select: {
      title: "shortTitle",
      startDate: "dateRange.startDate",
      endDate: "dateRange.endDate",
      media: "gallery.0",
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
