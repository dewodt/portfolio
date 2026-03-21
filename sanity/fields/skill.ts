import { defineField } from "sanity";
import { SkillPreview } from "../components/preview/skill-preview";
import { buildCollectionValidation } from "../utils/validation";
import { imageField } from "./image";
import { stringField } from "./string-field";

export const skillCategoriesField = () =>
  defineField({
    name: "skillCategories",
    title: "Skill Categories",
    description: "Add skill categories with their respective skills",
    type: "array",
    validation: buildCollectionValidation("Skill Categories", {
      required: true,
      min: 1,
    }),
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
          stringField({
            name: "categoryTitle",
            title: "Category Title",
            description:
              "e.g., Programming Languages, Web Development, Databases, Tools",
            validation: { required: true },
          }),
          defineField({
            name: "skills",
            title: "Skills",
            type: "array",
            description: "Skills in this category",
            validation: buildCollectionValidation("Skills", {
              required: true,
              min: 1,
            }),
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
                  stringField({
                    name: "title",
                    title: "Title",
                    description: "Insert skill title",
                    validation: { required: true },
                  }),
                  imageField({
                    name: "logoLight",
                    title: "Logo (Light)",
                    description:
                      "Logo for light mode (recommended type is SVG)",
                    options: { accept: "image/svg+xml" },
                    validation: { required: true },
                  }),
                  imageField({
                    name: "logoDark",
                    title: "Logo (Dark)",
                    description: "Logo for dark mode (recommended type is SVG)",
                    options: { accept: "image/svg+xml" },
                    validation: { required: true },
                  }),
                ],
              },
            ],
          }),
        ],
      },
    ],
  });
