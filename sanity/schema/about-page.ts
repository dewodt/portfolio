import { defineType } from "sanity";
import { imageField } from "../fields/image";
import { contentField } from "../fields/content/content";
import { skillCategoriesField } from "../fields/skill";
import { educationField } from "../fields/education";
import { stringField } from "../fields/string-field";
import { textField } from "../fields/text-field";

export const aboutPageSchema = defineType({
  name: "about-page",
  title: "About Page",
  type: "document",
  fields: [
    stringField({
      name: "heroMonoLabel",
      title: "Hero Mono Label",
      description:
        "The mono label displayed in the hero section (e.g., Software Engineer & Hiker)",
      validation: { required: true },
    }),
    stringField({
      name: "location",
      title: "Location",
      description: "Location (e.g., Jakarta, Indonesia)",
      validation: { required: true },
    }),
    stringField({
      name: "title",
      title: "Title",
      description: "Insert title (main heading)",
      validation: {
        required: true,
        max: 30,
        maxLevel: "warning",
      },
    }),
    contentField({
      name: "content",
      title: "Content",
      description: "Insert a content portable text!",
      validation: { required: true },
    }),
    imageField({
      name: "image",
      title: "Image",
      description: "Your photo (RECOMMENDED SIZE IS 1:1)",
      validation: { required: true },
    }),
    stringField({
      name: "educationMonoLabel",
      title: "Education Mono Label",
      description: "The mono label for the education section (e.g., Education)",
      validation: { required: true },
    }),
    stringField({
      name: "educationSectionTitle",
      title: "Education Section Title",
      description: "The main title for the education section",
      validation: { required: true },
    }),
    textField({
      name: "educationSectionDescription",
      title: "Education Section Description",
      description: "A brief description for the education section",
      validation: { required: true },
    }),
    educationField(),
    stringField({
      name: "skillsMonoLabel",
      title: "Skills Mono Label",
      description:
        "The mono label for the skills section (e.g., Tools & Technologies)",
      validation: { required: true },
    }),
    stringField({
      name: "skillsSectionTitle",
      title: "Skills Section Title",
      description:
        "The main title for the skills section (e.g., 'Tools & Technologies')",
      validation: { required: true },
    }),
    textField({
      name: "skillsSectionDescription",
      title: "Skills Section Description",
      description: "A brief description for the skills section",
      validation: { required: true },
    }),
    skillCategoriesField(),
  ],
});
