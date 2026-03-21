import type { BooleanDefinition, FieldDefinitionBase } from "@sanity/types";
import { defineField } from "sanity";
import {
  buildRequiredValidation,
  type BaseValidationOptions,
} from "../utils/validation";

type BooleanFieldOptions = Omit<
  BooleanDefinition & FieldDefinitionBase,
  "type" | "validation" | "name" | "title" | "description"
> & {
  name: string;
  title: string;
  description: string;
  validation?: BaseValidationOptions;
};

export const booleanField = ({
  name,
  title,
  description,
  validation,
  ...rest
}: BooleanFieldOptions) => {
  const fieldValidation = buildRequiredValidation(title, validation);

  return defineField({
    ...rest,
    name,
    title,
    description,
    type: "boolean",
    ...(fieldValidation ? { validation: fieldValidation } : {}),
  });
};
