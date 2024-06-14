import { defineField } from "sanity";
import { ExternalLinkIcon } from "../../components/icon/external-link-icon";

export const externalLinkField = defineField({
  name: "externalLink",
  title: "External Link",
  type: "object",
  icon: ExternalLinkIcon,
  fields: [
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => [
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }).error("Invalid URL"),
      ],
    },
  ],
  validation: (Rule) => Rule.required().error("External URL is required"),
});
