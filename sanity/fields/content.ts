import { defineField } from "sanity";
import { HighlightIcon } from "../components/icon/highlight-icon";
import { ImageIcon } from "../components/icon/image-icon";
import { CustomHighlight } from "../components/portable-text/mark/custom-highlight";
import { CustomBlockquote } from "../components/portable-text/block/custom-blockquote";
import { ExternalLinkIcon } from "../components/icon/external-link-icon";
import { InternalLinkIcon } from "../components/icon/internal-link-icon";
import { LatexPreview } from "../components/portable-text/math/latex-preview";
import { MathIcon } from "../components/icon/math-icon";
import { codeField } from "./code";

export const contentField = defineField({
  name: "content",
  title: "Content",
  type: "array",
  description: "Insert a content portable text!",
  validation: (Rule) => Rule.required().error("A content is required"),
  of: [
    {
      type: "block",

      // Remove small headings & h1 (h1 already with title)
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

      // Default lists
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],

      // Custom marks
      marks: {
        decorators: [
          // Default
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },

          // Addition
          {
            title: "Highlight",
            value: "highlight",
            icon: HighlightIcon,
            component: CustomHighlight,
          },
        ],
        annotations: [
          {
            name: "internalLink",
            title: "Internal Link",
            type: "object",
            icon: InternalLinkIcon,
            fields: [
              {
                name: "reference",
                title: "Reference",
                type: "reference",
                to: [
                  { type: "projects" },
                  { type: "experience" },
                  { type: "awards" },
                  { type: "blog" },
                ],
                validation: (Rule) =>
                  Rule.required().error("Reference is required"),
              },
            ],
            validation: (Rule) =>
              Rule.required().error("Reference is required"),
          },
          {
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
            validation: (Rule) =>
              Rule.required().error("External URL is required"),
          },
        ],
      },

      // Other inline elements
      of: [
        {
          type: "object",
          icon: MathIcon,
          title: "Inline LaTeX",
          name: "latex",
          components: { preview: LatexPreview },
          fields: [
            // Latex content
            {
              name: "body",
              title: "LaTeX content",
              type: "text",
              description: "Insert a LaTeX content",
              validation: (Rule) =>
                Rule.required().error("A LaTeX content is required"),
            },
          ],
          preview: {
            select: {
              body: "body",
            },
          },
          validation: (Rule) =>
            Rule.required().error("A LaTeX content is required"),
        },
      ],
    },

    // Image
    {
      type: "image",
      icon: ImageIcon,
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for screen readers",
          validation: (Rule) =>
            Rule.required().error("Alt text is required for the image"),
        },
      ],
      validation: (Rule) => Rule.required().error("An image is required"),
    },

    // Latex
    {
      type: "object",
      icon: MathIcon,
      title: "Block LaTeX",
      name: "latex",
      components: { preview: LatexPreview },
      fields: [
        // Latex content
        {
          name: "body",
          title: "LaTeX content",
          type: "text",
          description: "Insert a LaTeX content",
          validation: (Rule) =>
            Rule.required().error("A LaTeX content is required"),
        },
      ],
      preview: {
        select: {
          body: "body",
        },
      },
      validation: (Rule) =>
        Rule.required().error("A LaTeX content is required"),
    },

    // Code field
    {
      ...codeField,
    },
  ],
});
