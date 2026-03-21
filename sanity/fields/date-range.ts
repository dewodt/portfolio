import { defineField } from "sanity";
import { MONTH_DATE_FORMAT } from "../utils/constants";
import {
  buildRequiredValidation,
  type BaseValidationOptions,
} from "../utils/validation";

type DateRangeFieldOptions = {
  name: string;
  title: string;
  description: string;
  validation?: BaseValidationOptions;
};

export const dateRangeField = ({
  name,
  title,
  description,
  validation,
}: DateRangeFieldOptions) =>
  defineField({
    name,
    title,
    description,
    type: "object",
    fields: [
      {
        name: "startDate",
        title: "Start Date",
        description: "Insert start date (YYYY-MM)",
        type: "date",
        validation: buildRequiredValidation("Start Date", { required: true }),
        options: {
          dateFormat: MONTH_DATE_FORMAT,
        },
      },
      {
        name: "endDate",
        title: "End Date",
        description: "Insert end date (YYYY-MM)",
        type: "date",
        validation: (Rule: any) =>
          Rule.min(Rule.valueOfField("startDate")).error(
            "End Date must be after Start Date",
          ),
        options: {
          dateFormat: MONTH_DATE_FORMAT,
        },
      },
    ],
    ...(validation
      ? { validation: buildRequiredValidation(title, validation) }
      : {}),
    options: {
      columns: 2,
    },
  });
