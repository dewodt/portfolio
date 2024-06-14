import { defineField } from "sanity";
import { MathIcon } from "../../components/icon/math-icon";
import { LatexPreview } from "../../components/portable-text/other/latex-preview";

export const latexField = (isInline: boolean) =>
  defineField({
    type: "object",
    icon: MathIcon,
    title: isInline ? "Inline" : "Block",
    name: "latex",
    components: {
      // @ts-ignore
      preview: LatexPreview,
    },
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
    validation: (Rule) => Rule.required().error("A LaTeX content is required"),
  });
