import { defineField } from "sanity";
import { MathIcon } from "../../components/icon/math-icon";
import { LatexPreview } from "../../components/portable-text/other/latex-preview";
import { buildRequiredValidation } from "../../utils/validation";
import { textField } from "../text-field";

const baseLatexField = (name: string, title: string) =>
  defineField({
    type: "object",
    icon: MathIcon,
    title,
    name,
    components: {
      // @ts-ignore
      preview: LatexPreview,
    },
    description: "Insert a LaTeX content",
    fields: [
      textField({
        name: "body",
        title: "LaTeX content",
        description: "Insert a LaTeX content",
        validation: { required: true },
      }),
    ],
    preview: {
      select: {
        body: "body",
      },
    },
    validation: buildRequiredValidation(title, { required: true }),
  });

export const latexInlineField = () => baseLatexField("latex", "Inline");

export const latexBlockField = () => baseLatexField("latex", "Block");
