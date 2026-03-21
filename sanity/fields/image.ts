import { defineField } from "sanity";
import { stringField } from "./string-field";
import {
  buildAssetValidation,
  type BaseValidationOptions,
} from "../utils/validation";

type ImageFieldOptions = {
  name: string;
  title: string;
  description: string;
  validation?: BaseValidationOptions;
  options?: {
    accept?: string;
  };
};

export const imageField = ({
  name,
  title,
  description,
  validation,
  options,
}: ImageFieldOptions) =>
  defineField({
    name,
    title,
    type: "image",
    description,
    ...(options ? { options } : {}),
    fields: [
      stringField({
        name: "alt",
        title: "Alt Text",
        description: `Describe the ${title.toLowerCase()} for screen readers`,
        validation: { required: true },
      }),
    ],
    ...(validation
      ? { validation: buildAssetValidation(title, validation) }
      : {}),
  });
