import { defineField } from "sanity";
import { CodeIcon } from "../components/icon/code-icon";

export const codeBlockField = defineField({
  type: "code",
  name: "code",
  icon: CodeIcon,
  title: "Block",
  description: "Insert a code block field!",
  validation: (Rule) => Rule.required().error("A code block field is required"),
  options: {
    languageAlternatives: [
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
    withFilename: true,
  },
});
