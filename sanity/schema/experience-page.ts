import { titleField } from "../fields/title";
import { defineType } from "sanity";
import { descriptionField } from "../fields/description";
import { monoLabelField } from "../fields/mono-label";

export const experiencePageSchema = defineType({
  name: "experience-page",
  title: "Experience Page",
  type: "document",
  fields: [
    monoLabelField(
      "monoLabel",
      "Mono Label",
      "The mono label for the list page (e.g., Experiences)",
    ),
    monoLabelField(
      "detailMonoLabel",
      "Detail Mono Label",
      "The mono label for the detail page (e.g., Experience)",
    ),
    titleField,
    descriptionField,
  ],
});
