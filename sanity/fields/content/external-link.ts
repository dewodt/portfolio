import { defineField } from "sanity";
import { ExternalLinkIcon } from "../../components/icon/external-link-icon";
import { buildRequiredValidation } from "../../utils/validation";
import { urlField } from "../url-field";

export const externalLinkField = () =>
  defineField({
    name: "externalLink",
    title: "External Link",
    type: "object",
    icon: ExternalLinkIcon,
    description: "Insert an External URL (outside of the site)",
    fields: [
      urlField({
        name: "url",
        title: "URL",
        description: "Insert external URL",
        validation: {
          schemes: ["http", "https", "mailto", "tel"],
        },
      }),
    ],
    validation: buildRequiredValidation("External Link", { required: true }),
  });
