import type { FieldDefinitionBase, StringDefinition } from "@sanity/types";
import { defineField } from "sanity";
import {
  buildLengthValidation,
  type LengthValidationOptions,
} from "../utils/validation";

type StringFieldOptions = Omit<
  StringDefinition & FieldDefinitionBase,
  "type" | "validation" | "name" | "title" | "description"
> & {
  name: string;
  title: string;
  description: string;
  validation?: LengthValidationOptions;
};

export const stringField = ({
  name,
  title,
  description,
  validation,
  ...rest
}: StringFieldOptions) => {
  const fieldValidation = buildLengthValidation(title, validation);

  return defineField({
    ...rest,
    name,
    title,
    description,
    type: "string",
    ...(fieldValidation ? { validation: fieldValidation } : {}),
  });
};
