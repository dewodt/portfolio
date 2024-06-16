import { defineField } from "sanity";
import { CodeIcon } from "../../components/icon/code-icon";
import { CodeInline } from "../../components/portable-text/other/code-inline";
import { codeOptions } from "../../config/code-options";

export const codeInlineField = defineField({
  type: "object",
  icon: CodeIcon,
  title: "Inline",
  name: "code",
  description: "Insert an inline code!",
  components: {
    // @ts-ignore
    preview: CodeInline,
  },
  preview: {
    select: {
      code: "code",
      language: "language",
    },
  },
  validation: (Rule) => Rule.required().error("An inline code is required"),
  fields: [
    {
      name: "language",
      title: "Language",
      type: "string",
      validation: (Rule) => Rule.required().error("A language is required"),
      options: {
        list: codeOptions,
      },
    },
    {
      name: "code",
      title: "Code",
      type: "string",
      validation: (Rule) => Rule.required().error("A code is required"),
    },
  ],
});
