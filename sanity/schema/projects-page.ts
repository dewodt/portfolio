import { titleField } from "../fields/title";
import { defineType } from "sanity";
import { descriptionField } from "../fields/description";
import { monoLabelField } from "../fields/mono-label";

export const projectsPageSchema = defineType({
  name: "projects-page",
  title: "Projects Page",
  type: "document",
  fields: [
    monoLabelField(
      "monoLabel",
      "Mono Label",
      "The mono label for the list page (e.g., Projects)",
    ),
    monoLabelField(
      "detailMonoLabel",
      "Detail Mono Label",
      "The mono label for the detail page (e.g., Project)",
    ),
    titleField,
    descriptionField,
  ],
});
