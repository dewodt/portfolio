import { defineField } from "sanity";
import { InternalLinkIcon } from "../../components/icon/internal-link-icon";
import { referenceField } from "../reference-field";
import { buildRequiredValidation } from "../../utils/validation";

export const internalLinkField = () =>
  defineField({
    name: "internalLink",
    title: "Internal Link",
    type: "object",
    icon: InternalLinkIcon,
    description: "Insert an Internal URL (within the CMS data)",
    fields: [
      referenceField({
        name: "reference",
        title: "Reference",
        description: "Select the referenced CMS document",
        to: [
          { type: "projects" },
          { type: "experiences" },
          { type: "awards" },
          { type: "blogs" },
        ],
        validation: { required: true },
      }),
    ],
    validation: buildRequiredValidation("Internal Link", { required: true }),
  });
