import { defineType } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { contentField } from "../fields/content";
import { repositoryLinksField } from "../fields/repository-links";
import { deploymentLinksField } from "../fields/deployment-links";
import { titleField } from "../fields/title";
import { dateRangeField } from "../fields/date-range";
import { descriptionField } from "../fields/description";
import { companyField } from "../fields/company";
import { slugField } from "../fields/slug";
import { ExperienceIcon } from "../components/icon/experience-icon";

export const experienceSchema = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    titleField,
    slugField,
    descriptionField,
    companyField,
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
    },
    prepare({ title, company, startDate, endDate }) {
      // XXX YYYY
      const start = getFormattedDate(startDate as string);
      let subtitle = `${company} | ${start}`;
      if (endDate) {
        const end = getFormattedDate(endDate as string);
        subtitle += ` — ${end}`;
      } else {
        subtitle += " — Now";
      }
      return {
        title,
        subtitle,
      };
    },
  },
});
