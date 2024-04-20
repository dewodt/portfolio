import { defineField } from "sanity";

export const deploymentLinksField = defineField({
  name: "deploymentLinks",
  title: "Deployment Links",
  description:
    "Insert deployment links. The first deployment link will be used as a preview in the card (if any).",
  type: "array",
  of: [
    {
      name: "deploymentLink",
      title: "Deployment Link",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Label",
          description: "Insert label for the deployment link",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("A label is required for the deployment"),
        },
        {
          name: "url",
          title: "URL",
          description: "Insert deployment URL",
          type: "url",
          validation: (Rule) =>
            Rule.required().error("A URL is required for the deployment"),
        },
      ],
    },
  ],
});
