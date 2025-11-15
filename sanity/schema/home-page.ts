import { titleField } from "../fields/title";
import { defineType } from "sanity";
import { imageField } from "../fields/image";
import { contentField } from "../fields/content/content";
import { skillsSectionTitleField } from "../fields/skills-section-title";
import { skillsSectionDescriptionField } from "../fields/skills-section-description";
import { skillCategoriesField } from "../fields/skill";

export const homePageSchema = defineType({
  name: "home-page",
  title: "Home Page",
  type: "document",
  fields: [
    titleField,
    contentField,
    imageField("Your photo (RECOMMENDED SIZE IS 1:1)"),
    skillsSectionTitleField,
    skillsSectionDescriptionField,
    skillCategoriesField,
  ],
});
