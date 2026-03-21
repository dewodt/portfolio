import { defineField } from "sanity";
import { CodeIcon } from "../../components/icon/code-icon";
import { CodeInline } from "../../components/portable-text/other/code-inline";
import { codeOptions } from "../../utils/code-options";
import { buildRequiredValidation } from "../../utils/validation";
import { stringField } from "../string-field";

export const codeInlineField = () =>
  defineField({
    type: "object",
    icon: CodeIcon,
    title: "Inline",
    name: "customCode",
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
    validation: buildRequiredValidation("Inline", { required: true }),
    fields: [
      stringField({
        name: "language",
        title: "Language",
        description: "Select the language for syntax highlighting",
        validation: { required: true },
        options: {
          list: codeOptions,
        },
      }),
      stringField({
        name: "code",
        title: "Code",
        description: "Insert the inline code snippet",
        validation: { required: true },
      }),
    ],
  });

export const codeBlockField = () =>
  defineField({
    type: "code",
    name: "customCode",
    icon: CodeIcon,
    title: "Block",
    description: "Insert a code block field!",
    validation: buildRequiredValidation("Block", { required: true }),
    options: {
      languageAlternatives: codeOptions,
      withFilename: true,
    },
  });
