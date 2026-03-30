import imageUrlBuilder from "@sanity/image-url";

type SanityImageLike = {
  asset?: {
    _ref?: string;
    _id?: string;
  };
};

const hasImageAsset = (value: unknown): value is SanityImageLike => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const asset = (value as SanityImageLike).asset;

  if (!asset || typeof asset !== "object") {
    return false;
  }

  return typeof asset._ref === "string" || typeof asset._id === "string";
};

export const resolvePreviewImageUrl = (client: unknown, value: unknown) => {
  if (!hasImageAsset(value)) {
    return null;
  }

  return imageUrlBuilder(client as Parameters<typeof imageUrlBuilder>[0])
    .image(value)
    .url();
};
