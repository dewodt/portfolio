import { defineType } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { contentField } from "../fields/content/content";
import { dateRangeField } from "../fields/date-range";
import { linkCollectionField } from "../fields/link-collection";
import { slugField } from "../fields/slug";
import { ProjectsIcon } from "../components/icon/projects-icon";
import { imageField } from "../fields/image";
import { stringField } from "../fields/string-field";
import { textField } from "../fields/text-field";

export const projectsSchema = defineType({
  name: "projects",
  title: "Projects",
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
        source: "title",
      },
    }),
    textField({
      name: "description",
      title: "Description",
      description: "Insert description",
      validation: { required: true },
    }),
    dateRangeField({
      name: "dateRange",
      title: "Date Range",
      description: "Insert date range",
      validation: { required: true },
    }),
    linkCollectionField({
      name: "repositoryLinks",
      title: "Repository Links",
      description:
        "Insert repository links. The first repository link will be used as a preview in the card.",
    }),
    linkCollectionField({
      name: "deploymentLinks",
      title: "Deployment Links",
      description:
        "Insert deployment links. The first deployment link will be used as a preview in the card (if any).",
    }),
    contentField({
      name: "content",
      title: "Content",
      description: "Insert a content portable text!",
      validation: { required: true },
    }),
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
