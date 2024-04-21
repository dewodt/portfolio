import { defineType } from "sanity";
import { contentField } from "../fields/content";
import { repositoryLinksField } from "../fields/repository-links";
import { deploymentLinksField } from "../fields/deployment-links";
import { techStacksField } from "../fields/tech-stacks";
import { shortTitleField } from "../fields/short-title";
import { dateRangeField } from "../fields/date-range";
import { getFormattedDate } from "@/lib/utils";
import { companyField } from "../fields/company";

export const experienceSchema = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    shortTitleField,
    companyField,
    dateRangeField,
    techStacksField,
    repositoryLinksField,
    deploymentLinksField,
    contentField,
  ],
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
