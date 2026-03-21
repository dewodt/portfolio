import { defineField } from "sanity";
import { buildCollectionValidation } from "../utils/validation";
import { dateRangeField } from "./date-range";
import { imageField } from "./image";
import { stringField } from "./string-field";
import { textField } from "./text-field";

export const educationField = () =>
  defineField({
    name: "education",
    title: "Education",
    description: "Add your educational background",
    type: "array",
    validation: buildCollectionValidation("Education", {
      required: true,
      min: 1,
    }),
    of: [
      {
        name: "educationItem",
        title: "Education Item",
        type: "object",
        preview: {
          select: {
            title: "degree",
            subtitle: "university",
            media: "image",
          },
        },
        fields: [
          imageField({
            name: "image",
            title: "Institution Logo",
            description:
              "Logo of the educational institution. Recommended size is around 100x100 px (1:1 ratio)",
            validation: { required: true },
          }),
          stringField({
            name: "degree",
            title: "Degree",
            description: "e.g., Bachelor of Computer Science",
            validation: { required: true },
          }),
          stringField({
            name: "university",
            title: "University / Institution",
            description: "e.g., Universitas Brawijaya",
            validation: { required: true },
          }),
          dateRangeField({
            name: "dateRange",
            title: "Date Range",
            description: "Start and end dates",
            validation: { required: true },
          }),
          textField({
            name: "description",
            title: "Description",
            description: "Brief description of your education",
            validation: { required: true },
          }),
        ],
      },
    ],
  });
