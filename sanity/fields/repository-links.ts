import { defineField } from "sanity";

export const repositoryLinksField = defineField({
  name: "repositoryLinks",
  title: "Repository Links",
  description:
    "Insert repository links. The first repository link will be used as a preview in the card.",
  type: "array",
  of: [
    {
      name: "repositoryLink",
      title: "Repository Link",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Label",
          type: "string",
          description: "Insert label for the repository link",
          validation: (Rule) =>
            Rule.required().error("A label is required for the repository"),
        },
        {
          name: "url",
          title: "URL",
          type: "url",
          description: "Insert repository URL",
          validation: (Rule) =>
            Rule.required().error("A URL is required for the repository"),
        },
      ],
    },
  ],
  validation: (Rule) =>
    Rule.required().error("Repository links are required"),
});
