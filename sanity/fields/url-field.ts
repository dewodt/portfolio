import type { FieldDefinitionBase, UrlDefinition } from "@sanity/types";
import { defineField } from "sanity";
import {
  buildUrlValidation,
  type UrlValidationOptions,
} from "../utils/validation";

type UrlFieldOptions = Omit<
  UrlDefinition & FieldDefinitionBase,
  "type" | "validation" | "name" | "title" | "description"
> & {
  name: string;
  title: string;
  description: string;
  validation?: UrlValidationOptions;
};

export const urlField = ({
  name,
  title,
  description,
  validation,
  ...rest
}: UrlFieldOptions) => {
  const fieldValidation = buildUrlValidation(title, validation);

  return defineField({
    ...rest,
    name,
    title,
    description,
    type: "url",
    ...(fieldValidation ? { validation: fieldValidation } : {}),
  });
};
