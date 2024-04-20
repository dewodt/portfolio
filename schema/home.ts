import { defineType } from "sanity";
import { HighlightIcon } from "@sanity/icons";
import { CustomHighlight } from "./component";

export const homeSchema = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Insert h1 for the home page",
      validation: (Rule) =>
        Rule.required().error("A title is required for the home page"),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
              {
                title: "Highlight",
                value: "highlight",
                icon: HighlightIcon,
                component: CustomHighlight,
              },
            ],
          },
        },
      ],
      description: "Insert a description paragraph for the home page",
      validation: (Rule) =>
        Rule.required().error("A description is required for the home page"),
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      description:
        "Upload a photo of yourself! Photo will be displayed 1:1 aspect ratio on the website.",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Describe the photo for screen readers",
          validation: (Rule) =>
            Rule.required().error("Alt text is required for the photo"),
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .assetRequired()
          .error("A photo is required for the home page"),
    },
  ],
});
