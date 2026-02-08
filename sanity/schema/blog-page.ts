import { descriptionField } from "../fields/description";
import { titleField } from "./../fields/title";
import { defineType } from "sanity";
import { monoLabelField } from "../fields/mono-label";

export const blogPageSchema = defineType({
  name: "blog-page",
  title: "Blog Page",
  type: "document",
  fields: [
    monoLabelField(
      "monoLabel",
      "Mono Label",
      "The mono label for the list page (e.g., Blogs)",
    ),
    monoLabelField(
      "detailMonoLabel",
      "Detail Mono Label",
      "The mono label for the detail page (e.g., Blog)",
    ),
    titleField,
    descriptionField,
  ],
});
