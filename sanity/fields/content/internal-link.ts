import { defineField } from "sanity";
import { InternalLinkIcon } from "../../components/icon/internal-link-icon";

export const internalLinkField = defineField({
  name: "internalLink",
  title: "Internal Link",
  type: "object",
  icon: InternalLinkIcon,
  description: "Insert an Internal URL (within the CMS data)",
  fields: [
    {
      name: "reference",
      title: "Reference",
      type: "reference",
      to: [
        { type: "projects" },
        { type: "experiences" },
        { type: "awards" },
        { type: "blogs" },
      ],
      validation: (Rule) => Rule.required().error("Reference is required"),
    },
  ],
  validation: (Rule) => Rule.required().error("Reference is required"),
});
