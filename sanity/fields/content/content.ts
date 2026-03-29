import { defineField } from "sanity";
import { HighlightIcon } from "../../components/icon/highlight-icon";
import { ImageIcon } from "../../components/icon/image-icon";
import { CustomHighlight } from "../../components/portable-text/mark/custom-highlight";
import { CustomBlockquote } from "../../components/portable-text/block/custom-blockquote";
import {
  buildRequiredValidation,
  type BaseValidationOptions,
} from "../../utils/validation";
import { booleanField } from "../boolean-field";
import { stringField } from "../string-field";
import { codeBlockField, codeInlineField } from "./code";
import { externalLinkField } from "./external-link";
import { internalLinkField } from "./internal-link";
import { latexBlockField, latexInlineField } from "./latex";
import { skillBadgesField } from "./skill-badges";

type ContentFieldOptions = {
  name: string;
  title: string;
  description: string;
  validation?: BaseValidationOptions;
};

export const contentField = ({
  name,
  title,
  description,
  validation,
}: ContentFieldOptions) =>
  defineField({
    name,
    title,
    type: "array",
    description,
    ...(validation
      ? { validation: buildRequiredValidation(title, validation) }
      : {}),
    of: [
      {
        type: "block",

        styles: [
          { title: "Normal", value: "normal" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
          {
            title: "Blockquote",
            value: "blockquote",
            component: CustomBlockquote,
          },
        ],

        lists: [
          { title: "Bullet", value: "bullet" },
          { title: "Numbered", value: "number" },
        ],

        marks: {
          decorators: [
            { title: "Strong", value: "strong" },
            { title: "Emphasis", value: "em" },
            { title: "Underline", value: "underline" },
            { title: "Strike", value: "strike-through" },
            {
              title: "Highlight",
              value: "highlight",
              icon: HighlightIcon,
              component: CustomHighlight,
            },
          ],
          annotations: [internalLinkField(), externalLinkField()],
        },

        of: [latexInlineField(), codeInlineField()],
      },

      {
        type: "image",
        icon: ImageIcon,
        fields: [
          stringField({
            name: "alt",
            title: "Alt Text",
            description: "Describe the image for screen readers",
            validation: { required: true },
          }),
          booleanField({
            name: "caption",
            title: "Caption",
            description: "Add a caption (using alt text) to the image",
            initialValue: false,
            validation: { required: true },
          }),
        ],
        validation: buildRequiredValidation("Image", { required: true }),
      },

      latexBlockField(),

      codeBlockField(),

      skillBadgesField(),
    ],
  });
