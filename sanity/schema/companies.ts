import { defineType } from "sanity";
import { ExperienceIcon } from "../components/icon/experiences-icon";
import { imageField } from "../fields/image";
import { stringField } from "../fields/string-field";
import { textField } from "../fields/text-field";

export const companiesSchema = defineType({
  name: "companies",
  title: "Company",
  type: "document",
  icon: ExperienceIcon,
  fields: [
    imageField({
      name: "image",
      title: "Image",
      description:
        "Image for company cards and experience role detail headers (RECOMMENDED SIZE IS 1200x630px + LESS THAN 300kb).",
      validation: { required: true },
    }),
    stringField({
      name: "name",
      title: "Name",
      description: "Insert company name",
      validation: { required: true },
    }),
    textField({
      name: "summary",
      title: "Summary",
      description: "Short company summary shown on grouped experience cards",
      validation: { required: true },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "summary",
      media: "image",
    },
  },
});
