import { titleField } from "../fields/title";
import { defineField, defineType } from "sanity";
import { imageField } from "../fields/image";
import { contentField } from "../fields/content/content";
import { skillsSectionTitleField } from "../fields/skills-section-title";
import { skillsSectionDescriptionField } from "../fields/skills-section-description";
import { skillCategoriesField } from "../fields/skill";
import { monoLabelField } from "../fields/mono-label";
import { locationField } from "../fields/location";
import { educationField } from "../fields/education";

export const aboutPageSchema = defineType({
  name: "about-page",
  title: "About Page",
  type: "document",
  fields: [
    monoLabelField(
      "heroMonoLabel",
      "Hero Mono Label",
      "The mono label displayed in the hero section (e.g., Software Engineer & Hiker)",
    ),
    locationField(),
    titleField,
    contentField,
    imageField("Your photo (RECOMMENDED SIZE IS 1:1)"),
    monoLabelField(
      "educationMonoLabel",
      "Education Mono Label",
      "The mono label for the education section (e.g., Education)",
    ),
    defineField({
      name: "educationSectionTitle",
      title: "Education Section Title",
      description: "The main title for the education section",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Education section title is required"),
    }),
    defineField({
      name: "educationSectionDescription",
      title: "Education Section Description",
      description: "A brief description for the education section",
      type: "text",
      validation: (Rule) =>
        Rule.required().error("Education section description is required"),
    }),
    educationField,
    monoLabelField(
      "skillsMonoLabel",
      "Skills Mono Label",
      "The mono label for the skills section (e.g., Tools & Technologies)",
    ),
    skillsSectionTitleField,
    skillsSectionDescriptionField,
    skillCategoriesField,
  ],
});
