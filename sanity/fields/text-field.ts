import type { FieldDefinitionBase, TextDefinition } from "@sanity/types";
import { defineField } from "sanity";
import {
  buildLengthValidation,
  type LengthValidationOptions,
} from "../utils/validation";

type TextFieldOptions = Omit<
  TextDefinition & FieldDefinitionBase,
  "type" | "validation" | "name" | "title" | "description"
> & {
  name: string;
  title: string;
  description: string;
  validation?: LengthValidationOptions;
};

export const textField = ({
  name,
  title,
  description,
  validation,
  ...rest
}: TextFieldOptions) => {
  const fieldValidation = buildLengthValidation(title, validation);

  return defineField({
    ...rest,
    name,
    title,
    description,
    type: "text",
    ...(fieldValidation ? { validation: fieldValidation } : {}),
  });
};
