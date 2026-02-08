import { defineField } from "sanity";
import { SkillPreview } from "../components/preview/skill-preview";

export const skillCategoriesField = defineField({
  name: "skillCategories",
  title: "Skill Categories",
  description: "Add skill categories with their respective skills",
  type: "array",
  validation: (Rule) =>
    Rule.required().min(1).error("At least one skill category is required"),
  of: [
    {
      name: "skillCategory",
      title: "Skill Category",
      description: "A category containing related skills",
      type: "object",
      preview: {
        select: {
          title: "categoryTitle",
          skills: "skills",
        },
        prepare({ title, skills }) {
          const skillCount = skills?.length || 0;
          return {
            title: title || "Untitled Category",
            subtitle: `${skillCount} skill${skillCount !== 1 ? "s" : ""}`,
          };
        },
      },
      fields: [
        {
          name: "categoryTitle",
          title: "Category Title",
          type: "string",
          description:
            "e.g., Programming Languages, Web Development, Databases, Tools",
          validation: (Rule) =>
            Rule.required().error("Category title is required"),
        },
        {
          name: "skills",
          title: "Skills",
          type: "array",
          description: "Skills in this category",
          validation: (Rule) =>
            Rule.required().min(1).error("At least one skill is required"),
          of: [
            {
              name: "skillItem",
              title: "Skill Item",
              description: "Insert a skill item",
              type: "object",
              components: {
                preview: SkillPreview,
              },
              preview: {
                select: {
                  title: "title",
                  logoLight: "logoLight",
                  logoDark: "logoDark",
                },
              },
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule) =>
                    Rule.required().error("Title is required"),
                },
                {
                  name: "logoLight",
                  title: "Logo (Light)",
                  type: "image",
                  description: "Logo for light mode (recommended type is SVG)",
                  validation: (Rule) =>
                    Rule.required().error("Logo is required"),
                },
                {
                  name: "logoDark",
                  title: "Logo (Dark)",
                  type: "image",
                  description: "Logo for dark mode (recommended type is SVG)",
                  validation: (Rule) =>
                    Rule.required().error("Dark logo is required"),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
