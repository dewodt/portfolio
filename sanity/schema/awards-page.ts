import { descriptionField } from "../fields/description";
import { titleField } from "../fields/title";
import { defineType } from "sanity";
import { monoLabelField } from "../fields/mono-label";

export const awardsPageSchema = defineType({
  name: "awards-page",
  title: "Awards Page",
  type: "document",
  fields: [
    monoLabelField(
      "monoLabel",
      "Mono Label",
      "The mono label for the list page (e.g., Awards)",
    ),
    monoLabelField(
      "detailMonoLabel",
      "Detail Mono Label",
      "The mono label for the detail page (e.g., Award)",
    ),
    titleField,
    descriptionField,
  ],
});
