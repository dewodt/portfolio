import { defineType } from "sanity";
import type { SlugSourceFn } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { contentField } from "../fields/content/content";
import { dateRangeField } from "../fields/date-range";
import { linkCollectionField } from "../fields/link-collection";
import { referenceField } from "../fields/reference-field";
import { slugField } from "../fields/slug";
import { ExperienceIcon } from "../components/icon/experiences-icon";
import { stringField } from "../fields/string-field";

const getExperienceRoleSlugSource: SlugSourceFn = async (document, context) => {
  const companyReference =
    typeof document.company === "object" &&
    document.company !== null &&
    "_ref" in document.company &&
    typeof document.company._ref === "string"
      ? document.company._ref
      : "";

  if (!companyReference) return "";

  const client = context.getClient({ apiVersion: "2024-04-19" });
  const companyName = await client.fetch<string | null>(
    `*[_id == $id][0].name`,
    { id: companyReference },
  );

  if (!companyName) return "";

  return [companyName, document.title, document.employmentType]
    .filter(
      (value): value is string => typeof value === "string" && Boolean(value),
    )
    .join(" ");
};

export const experiencesSchema = defineType({
  name: "experiences",
  title: "Experience Role",
  type: "document",
  icon: ExperienceIcon,
  fields: [
    referenceField({
      name: "company",
      title: "Company",
      description: "Select the company for this role",
      to: [{ type: "companies" }],
      validation: { required: true },
    }),
    stringField({
      name: "title",
      title: "Title",
      description: "Insert role title",
      validation: { required: true },
    }),
    stringField({
      name: "employmentType",
      title: "Employment Type",
      description: "Select employment type",
      options: {
        layout: "dropdown",
        list: [
          { title: "Contract", value: "Contract" },
          { title: "Part-time", value: "Part-time" },
          { title: "Full-time", value: "Full-time" },
          { title: "Internship", value: "Internship" },
        ],
      },
    }),
    slugField({
      name: "slug",
      title: "Slug",
      description: "The URL segment for this role",
      validation: { required: true },
      options: {
        source: getExperienceRoleSlugSource,
      },
    }),
    dateRangeField({
      name: "dateRange",
      title: "Date Range",
      description: "Insert date range",
      validation: { required: true },
    }),
    stringField({
      name: "location",
      title: "Location",
      description:
        "Location for this role (for example: Remote, Jakarta, Indonesia)",
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
  preview: {
    select: {
      title: "title",
      company: "company.name",
      startDate: "dateRange.startDate",
      endDate: "dateRange.endDate",
      employmentType: "employmentType",
      media: "company.image",
    },
    prepare({ title, company, startDate, endDate, employmentType, media }) {
      const start = startDate ? getFormattedDate(startDate as string) : "";
      const end = endDate ? getFormattedDate(endDate as string) : "Present";
      const subtitle = [company, `${start} - ${end}`, employmentType]
        .filter(Boolean)
        .join(" | ");

      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
