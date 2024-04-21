import { defineType } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { contentField } from "../fields/content";
import { repositoryLinksField } from "../fields/repository-links";
import { deploymentLinksField } from "../fields/deployment-links";
import { galleryField } from "../fields/gallery";
import { techStacksField } from "../fields/tech-stacks";
import { titleField } from "../fields/title";
import { descriptionField } from "../fields/description";
import { dateRangeField } from "../fields/date-range";
import { imageField } from "../fields/image";
import { slugField } from "../fields/slug";

export const projectsSchema = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    imageField,
    titleField,
    slugField,
    descriptionField,
    dateRangeField,
    techStacksField,
    repositoryLinksField,
    deploymentLinksField,
    contentField,
    galleryField,
  ],
  icon: () => "💻",
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
