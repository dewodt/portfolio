import { defineType } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { contentField } from "../fields/content/content";
import { repositoryLinksField } from "../fields/repository-links";
import { deploymentLinksField } from "../fields/deployment-links";
import { titleField } from "../fields/title";
import { descriptionField } from "../fields/description";
import { dateRangeField } from "../fields/date-range";
import { slugField } from "../fields/slug";
import { ProjectsIcon } from "../components/icon/projects-icon";
import { imageField } from "../fields/image";

export const projectsSchema = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    imageField(
      "Image for the card preview, link preview, and first header image (RECOMMENDED SIZE IS 1200x630px + LESS THAN 300kb).",
    ),
    titleField,
    slugField,
    descriptionField,
    dateRangeField,
    repositoryLinksField,
    deploymentLinksField,
    contentField,
  ],
  icon: ProjectsIcon,
  preview: {
    select: {
      title: "title",
      startDate: "dateRange.startDate",
      endDate: "dateRange.endDate",
      media: "image",
    },
    prepare({ title, startDate, endDate, media }) {
      // XXX YYYY
      const start = getFormattedDate(startDate as string);
      let subtitle = `${start}`;
      if (endDate) {
        const end = getFormattedDate(endDate as string);
        subtitle += ` – ${end}`;
      }

      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
