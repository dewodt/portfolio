import { defineField } from "sanity";
import { CodeIcon } from "../../components/icon/code-icon";
import { codeOptions } from "../../config/code-options";

export const codeBlockField = defineField({
  type: "code",
  name: "code",
  icon: CodeIcon,
  title: "Block",
  description: "Insert a code block field!",
  validation: (Rule) => Rule.required().error("A code block field is required"),
  options: {
    languageAlternatives: codeOptions,
    withFilename: true,
  },
});
