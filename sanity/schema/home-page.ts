import { titleField } from "../fields/title";
import { defineType } from "sanity";
import { imageField } from "../fields/image";
import { contentField } from "../fields/content/content";
import { skillField, SkillType } from "../fields/skill";

export const homePageSchema = defineType({
  name: "home-page",
  title: "Home Page",
  type: "document",
  fields: [
    titleField,
    contentField,
    imageField("Your photo (RECOMMENDED SIZE IS 1:1)"),
    skillField(SkillType.ProgrammingLanguage),
    skillField(SkillType.WebDevelopment),
    skillField(SkillType.Database),
    skillField(SkillType.Tool),
  ],
});
