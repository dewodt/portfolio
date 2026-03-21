import { defineArrayMember, defineField } from "sanity";
import {
  buildCollectionValidation,
  type CollectionValidationOptions,
} from "../utils/validation";
import { stringField } from "./string-field";
import { urlField } from "./url-field";

type LinkCollectionFieldOptions = {
  name: string;
  title: string;
  description: string;
  validation?: CollectionValidationOptions;
};

const singularize = (value: string) => value.replace(/s$/, "");

const toSentenceCase = (value: string) =>
  value.length === 0 ? value : value[0].toLowerCase() + value.slice(1);

export const linkCollectionField = ({
  name,
  title,
  description,
  validation,
}: LinkCollectionFieldOptions) => {
  const fieldValidation = buildCollectionValidation(title, validation);
  const itemName = singularize(name);
  const itemTitle = singularize(title);
  const itemTitleLower = toSentenceCase(itemTitle);

  return defineField({
    name,
    title,
    description,
    type: "array",
    ...(fieldValidation ? { validation: fieldValidation } : {}),
    of: [
      defineArrayMember({
        name: itemName,
        title: itemTitle,
        description: `Insert a ${itemTitleLower} item`,
        type: "object",
        fields: [
          stringField({
            name: "label",
            title: "Label",
            description: `Insert label for the ${itemTitleLower}`,
            validation: { required: true },
          }),
          urlField({
            name: "url",
            title: "URL",
            description: `Insert ${itemTitleLower} URL`,
            validation: {
              required: true,
              schemes: ["http", "https"],
            },
          }),
        ],
      }),
    ],
  });
};
