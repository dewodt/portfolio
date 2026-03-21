import type { FieldDefinitionBase, SlugDefinition } from "@sanity/types";
import { defineField } from "sanity";
import {
  buildRequiredValidation,
  type BaseValidationOptions,
} from "../utils/validation";

type SlugFieldOptions = Omit<
  SlugDefinition & FieldDefinitionBase,
  "type" | "validation" | "name" | "title" | "description" | "options"
> & {
  name: string;
  title: string;
  description: string;
  validation?: BaseValidationOptions;
  options: NonNullable<SlugDefinition["options"]>;
};

export const slugField = ({
  name,
  title,
  description,
  validation,
  options,
  ...rest
}: SlugFieldOptions) =>
  defineField({
    ...rest,
    name,
    title,
    type: "slug",
    description,
    options,
    ...(validation
      ? { validation: buildRequiredValidation(title, validation) }
      : {}),
  });
