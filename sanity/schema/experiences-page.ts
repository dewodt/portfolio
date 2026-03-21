import { defineType } from "sanity";
import { stringField } from "../fields/string-field";
import { textField } from "../fields/text-field";

export const experiencePageSchema = defineType({
  name: "experiences-page",
  title: "Experience Page",
  type: "document",
  fields: [
    stringField({
      name: "monoLabel",
      title: "Mono Label",
      description: "The mono label for the list page (e.g., Experiences)",
      validation: { required: true },
    }),
    stringField({
      name: "detailMonoLabel",
      title: "Detail Mono Label",
      description: "The mono label for the detail page (e.g., Experience)",
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
    textField({
      name: "description",
      title: "Description",
      description: "Insert description",
      validation: { required: true },
    }),
  ],
});
