import { defineArrayMember, defineField } from "sanity";
import { buildCollectionValidation } from "../utils/validation";
import { imageField } from "./image";
import { stringField } from "./string-field";
import { urlField } from "./url-field";

export const skillReferencesField = ({
  name,
  title,
  description,
}: {
  name: string;
  title: string;
  description: string;
}) =>
  defineField({
    name,
    title,
    description,
    type: "array",
    validation: buildCollectionValidation(title, {
      required: true,
      min: 1,
    }),
    of: [
      defineArrayMember({
        type: "reference",
        to: [{ type: "skills" }],
      }),
    ],
  });

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
      defineArrayMember({
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
          skillReferencesField({
            name: "skills",
            title: "Skills",
            description: "Select skills in the exact order they should appear",
          }),
        ],
      }),
    ],
  });

export const skillFields = () => [
  stringField({
    name: "title",
    title: "Title",
    description: "Insert skill title",
    validation: { required: true },
  }),
  urlField({
    name: "url",
    title: "URL",
    description: "Insert the official website or canonical page for this skill",
    validation: {
      required: true,
      schemes: ["http", "https"],
    },
  }),
  imageField({
    name: "logoLight",
    title: "Logo (Light)",
    description: "Logo for light mode (recommended type is SVG)",
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
];
