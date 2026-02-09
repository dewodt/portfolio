import { defineType } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { contentField } from "../fields/content/content";
import { repositoryLinksField } from "../fields/repository-links";
import { deploymentLinksField } from "../fields/deployment-links";
import { imageField } from "../fields/image";
import { titleField } from "../fields/title";
import { dateRangeField } from "../fields/date-range";
import { descriptionField } from "../fields/description";
import { companyField } from "../fields/company";
import { locationField } from "../fields/location";
import { slugField } from "../fields/slug";
import { ExperienceIcon } from "../components/icon/experiences-icon";

export const experienceSchema = defineType({
  name: "experiences",
  title: "Experience",
  type: "document",
  fields: [
    imageField(
      "Image for link preview and detail page hero (RECOMMENDED SIZE IS 1200x630px + LESS THAN 300kb).",
    ),
    titleField,
    slugField,
    descriptionField,
    companyField,
    locationField("Location of the experience (e.g., Jakarta, Indonesia)"),
    dateRangeField,
    repositoryLinksField,
    deploymentLinksField,
    contentField,
  ],
  icon: ExperienceIcon,
  preview: {
    select: {
      title: "title",
      company: "company",
      startDate: "dateRange.startDate",
      endDate: "dateRange.endDate",
      media: "image",
    },
    prepare({ title, company, startDate, endDate, media }) {
      // XXX YYYY
      const start = getFormattedDate(startDate as string);
      let subtitle = `${company} | ${start}`;
      if (endDate) {
        const end = getFormattedDate(endDate as string);
        subtitle += ` – ${end}`;
      } else {
        subtitle += " – Now";
      }
      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
