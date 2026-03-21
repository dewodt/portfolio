import type { FieldDefinitionBase, ReferenceDefinition } from "@sanity/types";
import { defineField } from "sanity";
import {
  buildRequiredValidation,
  type BaseValidationOptions,
} from "../utils/validation";

type ReferenceFieldOptions = Omit<
  ReferenceDefinition & FieldDefinitionBase,
  "type" | "validation" | "name" | "title" | "description" | "to"
> & {
  name: string;
  title: string;
  description: string;
  to: NonNullable<ReferenceDefinition["to"]>;
  validation?: BaseValidationOptions;
};

export const referenceField = ({
  name,
  title,
  description,
  to,
  validation,
  ...rest
}: ReferenceFieldOptions) => {
  const fieldValidation = buildRequiredValidation(title, validation);

  return defineField({
    ...rest,
    name,
    title,
    description,
    type: "reference",
    to,
    ...(fieldValidation ? { validation: fieldValidation } : {}),
  });
};
