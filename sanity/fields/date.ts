import { defineField } from "sanity";
import {
  buildRequiredValidation,
  type BaseValidationOptions,
} from "../utils/validation";
import { MONTH_DATE_FORMAT } from "../utils/constants";

type DateFieldOptions = {
  name: string;
  title: string;
  description: string;
  validation?: BaseValidationOptions;
};

export const dateField = ({
  name,
  title,
  description,
  validation,
}: DateFieldOptions) =>
  defineField({
    name,
    title,
    description,
    type: "date",
    options: {
      dateFormat: MONTH_DATE_FORMAT,
    },
    ...(validation
      ? { validation: buildRequiredValidation(title, validation) }
      : {}),
  });
