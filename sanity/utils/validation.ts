export type ValidationLevel = "error" | "warning";

export type BaseValidationOptions = {
  required?: boolean;
};

export type LengthValidationOptions = BaseValidationOptions & {
  min?: number;
  minLevel?: ValidationLevel;
  max?: number;
  maxLevel?: ValidationLevel;
};

export type UrlValidationOptions = BaseValidationOptions & {
  schemes?: string[];
};

export type CollectionValidationOptions = BaseValidationOptions & {
  min?: number;
  minLevel?: ValidationLevel;
  max?: number;
  maxLevel?: ValidationLevel;
};

const applyLevel = (rule: any, level: ValidationLevel, message: string) =>
  level === "warning" ? rule.warning(message) : rule.error(message);

export const buildRequiredValidation = (
  title: string,
  validation: BaseValidationOptions = {},
) => {
  if (!validation.required) {
    return undefined;
  }

  return (Rule: any) => Rule.required().error(`${title} is required`);
};

export const buildAssetValidation = (
  title: string,
  validation: BaseValidationOptions = {},
) => {
  if (!validation.required) {
    return undefined;
  }

  return (Rule: any) =>
    Rule.required().assetRequired().error(`${title} is required`);
};

export const buildLengthValidation = (
  title: string,
  validation: LengthValidationOptions = {},
) => {
  const hasValidation =
    validation.required ||
    validation.min !== undefined ||
    validation.max !== undefined;

  if (!hasValidation) {
    return undefined;
  }

  return (Rule: any) => {
    const rules = [];

    if (validation.required) {
      rules.push(Rule.required().error(`${title} is required`));
    }

    if (validation.min !== undefined) {
      rules.push(
        applyLevel(
          Rule.min(validation.min),
          validation.minLevel ?? "error",
          `${title} must be at least ${validation.min} characters long`,
        ),
      );
    }

    if (validation.max !== undefined) {
      rules.push(
        applyLevel(
          Rule.max(validation.max),
          validation.maxLevel ?? "error",
          `${title} must be at most ${validation.max} characters long`,
        ),
      );
    }

    return rules.length === 1 ? rules[0] : rules;
  };
};

export const buildUrlValidation = (
  title: string,
  validation: UrlValidationOptions = {},
) => {
  const hasValidation =
    validation.required || (validation.schemes?.length ?? 0) > 0;

  if (!hasValidation) {
    return undefined;
  }

  return (Rule: any) => {
    let rule = Rule;

    if (validation.required) {
      rule = rule.required().error(`${title} is required`);
    }

    if ((validation.schemes?.length ?? 0) > 0) {
      rule = rule
        .uri({ scheme: validation.schemes })
        .error(`${title} must be a valid URL`);
    }

    return rule;
  };
};

export const buildCollectionValidation = (
  title: string,
  validation: CollectionValidationOptions = {},
  itemLabel = "items",
) => {
  const hasValidation =
    validation.required ||
    validation.min !== undefined ||
    validation.max !== undefined;

  if (!hasValidation) {
    return undefined;
  }

  return (Rule: any) => {
    const rules = [];

    if (validation.required) {
      rules.push(Rule.required().error(`${title} is required`));
    }

    if (validation.min !== undefined) {
      rules.push(
        applyLevel(
          Rule.min(validation.min),
          validation.minLevel ?? "error",
          `${title} must contain at least ${validation.min} ${itemLabel}`,
        ),
      );
    }

    if (validation.max !== undefined) {
      rules.push(
        applyLevel(
          Rule.max(validation.max),
          validation.maxLevel ?? "error",
          `${title} must contain at most ${validation.max} ${itemLabel}`,
        ),
      );
    }

    return rules.length === 1 ? rules[0] : rules;
  };
};
