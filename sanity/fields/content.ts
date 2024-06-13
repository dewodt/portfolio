import { defineField } from "sanity";
import { HighlightIcon } from "../components/icon/highlight-icon";
import { ImageIcon } from "../components/icon/image-icon";
import { CustomHighlight } from "../components/portable-text/mark/custom-highlight";
import { CustomBlockquote } from "../components/portable-text/block/custom-blockquote";
import { ExternalLinkIcon } from "../components/icon/external-link-icon";
import { InternalLinkIcon } from "../components/icon/internal-link-icon";
import { LatexPreview } from "../components/portable-text/math/latex-preview";
import { MathIcon } from "../components/icon/math-icon";
import { codeBlockField } from "./code-block";
import { CodeInline } from "../components/portable-text/code/code-inline";
import { CodeIcon } from "../components/icon/code-icon";

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
        // Inline latex
        {
          type: "object",
          icon: MathIcon,
          title: "Inline",
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

        // Inline code
        {
          type: "object",
          icon: CodeIcon,
          title: "Inline",
          name: "code",
          description: "Insert an inline code!",
          components: {
            preview: CodeInline,
          },
          preview: {
            select: {
              code: "code",
              language: "language",
            },
          },
          validation: (Rule) =>
            Rule.required().error("An inline code is required"),
          fields: [
            {
              name: "code",
              title: "Code",
              type: "string",
              validation: (Rule) => Rule.required().error("A code is required"),
            },
            {
              name: "language",
              title: "Language",
              type: "string",
              validation: (Rule) =>
                Rule.required().error("A language is required"),
              options: {
                list: [
                  // groq, javascript, jsx, typescript, tsx, php, sql, mysql, json, markdown, java, html, csharp, sh, css, ruby, python, xml, yaml, golang, text
                  { title: "JavaScript", value: "javascript" },
                  { title: "JSX", value: "jsx" },
                  { title: "TypeScript", value: "typescript" },
                  { title: "TSX", value: "tsx" },
                  { title: "Go", value: "go" },
                  { title: "HTML", value: "html" },
                  { title: "CSS", value: "css" },
                  { title: "PHP", value: "php" },
                  { title: "Java", value: "java" },
                  { title: "Ruby", value: "ruby" },
                  { title: "C#", value: "csharp" },
                  { title: "Python", value: "python" },
                  { title: "Shell", value: "sh" },
                  { title: "SQL", value: "sql" },
                  { title: "MySQL", value: "mysql" },
                  { title: "GROQ", value: "groq" },
                  { title: "Text", value: "text" },
                  { title: "Markdown", value: "markdown" },
                  { title: "JSON", value: "json" },
                  { title: "XML", value: "xml" },
                  { title: "YAML", value: "yaml" },
                ],
              },
            },
          ],
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
      title: "Block",
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
      ...codeBlockField,
    },
  ],
});
