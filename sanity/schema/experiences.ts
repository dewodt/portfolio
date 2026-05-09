import { defineArrayMember, defineField, defineType } from "sanity";
import type { SlugSourceFn } from "sanity";
import { getFormattedDate } from "@/lib/utils";
import { contentField } from "../fields/content/content";
import { dateRangeField } from "../fields/date-range";
import { imageField } from "../fields/image";
import { linkCollectionField } from "../fields/link-collection";
import { slugField } from "../fields/slug";
import { ExperienceIcon } from "../components/icon/experiences-icon";
import { stringField } from "../fields/string-field";
import { textField } from "../fields/text-field";

const getExperienceSlugSource: SlugSourceFn = (document) =>
  typeof document.company === "string" ? document.company : "";

export const experiencesSchema = defineType({
  name: "experiences",
  title: "Experience",
  type: "document",
  icon: ExperienceIcon,
  fields: [
    imageField({
      name: "image",
      title: "Company Logo",
      description:
        "Company logo for experience cards and detail headers (RECOMMENDED SIZE IS 1200x630px + LESS THAN 300kb).",
      validation: { required: true },
    }),
    stringField({
      name: "company",
      title: "Company",
      description: "Insert company name",
      validation: { required: true },
    }),
    textField({
      name: "companySummary",
      title: "Company Summary",
      description:
        "Short company summary shown on experience cards and detail pages",
      validation: { required: true },
    }),
    slugField({
      name: "slug",
      title: "Slug",
      description: "The URL segment for this company experience",
      validation: { required: true },
      options: {
        source: getExperienceSlugSource,
      },
    }),
    defineField({
      name: "roles",
      title: "Roles",
      description: "Add one or more roles held at this company",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          name: "experienceRole",
          title: "Experience Role",
          type: "object",
          fields: [
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
          ],
          preview: {
            select: {
              title: "title",
              startDate: "dateRange.startDate",
              endDate: "dateRange.endDate",
              employmentType: "employmentType",
            },
            prepare({ title, startDate, endDate, employmentType }) {
              const start = startDate
                ? getFormattedDate(startDate as string)
                : "";
              const end = endDate
                ? getFormattedDate(endDate as string)
                : "Present";
              const subtitle = [`${start} - ${end}`, employmentType]
                .filter(Boolean)
                .join(" | ");

              return {
                title,
                subtitle,
              };
            },
          },
        }),
      ],
    }),
    contentField({
      name: "content",
      title: "Content",
      description: "Insert one company-level experience story",
      validation: { required: true },
    }),
  ],
  preview: {
    select: {
      title: "company",
      roles: "roles",
      media: "image",
    },
    prepare({ title, roles, media }) {
      const roleCount = Array.isArray(roles) ? roles.length : 0;
      const subtitle =
        roleCount === 1 ? "1 role" : `${roleCount.toString()} roles`;

      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
