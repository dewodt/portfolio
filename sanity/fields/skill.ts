import { defineField } from "sanity";

export enum SkillType {
  ProgrammingLanguage = "programming-language",
  WebDevelopment = "web-development",
  MobileDevelopment = "mobile-development",
  Database = "database",
  Cloud = "cloud",
  DataScience = "data-science",
  MachineLearning = "machine-learning",
  Tool = "tool",
  Other = "other",
}

export const skillField = (skillType: SkillType) => {
  const formattedSkillType = skillType
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const skillName = `skill${formattedSkillType.split(" ").join("")}`;

  const formattedSkillName = `${formattedSkillType} Skill`;

  return defineField({
    name: skillName,
    title: formattedSkillName,
    description: "Insert a skill for this category",
    type: "array",
    of: [
      {
        name: "skillItem",
        title: "Skill Item",
        description: "Insert a skill item",
        type: "object",
        preview: {
          select: {
            title: "title",
            media: "logo",
          },
          prepare({ title, media }) {
            return {
              title,
              media,
            };
          },
        },
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required().error("Title is required"),
          },
          {
            name: "logo",
            title: "Logo",
            type: "image",
            description: "Insert a logo (recommended type is SVG)",
            validation: (Rule) => [Rule.required().error("Logo is required")],
          },
        ],
      },
    ],
  });
};
