/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type BlogPage = {
  _id: string;
  _type: "blog-page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  description: string;
};

export type AwardsPage = {
  _id: string;
  _type: "awards-page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  description: string;
};

export type ExperiencePage = {
  _id: string;
  _type: "experience-page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  description: string;
};

export type ProjectsPage = {
  _id: string;
  _type: "projects-page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  description: string;
};

export type HomePage = {
  _id: string;
  _type: "home-page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  content: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
        listItem?: "bullet" | "number";
        markDefs?: Array<
          | {
              reference:
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "projects";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "experience";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "awards";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "blog";
                  };
              _type: "internalLink";
              _key: string;
            }
          | {
              url?: string;
              _type: "externalLink";
              _key: string;
            }
        >;
        level?: number;
        _type: "block";
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string;
        _type: "image";
        _key: string;
      }
  >;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    _type: "image";
  };
};

export type Projects = {
  _id: string;
  _type: "projects";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    _type: "image";
  };
  title: string;
  slug: Slug;
  description: string;
  dateRange: {
    startDate: string;
    endDate?: string;
  };
  repositoryLinks?: Array<{
    label: string;
    url: string;
    _type: "repositoryLink";
    _key: string;
  }>;
  deploymentLinks?: Array<{
    label: string;
    url: string;
    _type: "deploymentLink";
    _key: string;
  }>;
  content: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
        listItem?: "bullet" | "number";
        markDefs?: Array<
          | {
              reference:
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "projects";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "experience";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "awards";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "blog";
                  };
              _type: "internalLink";
              _key: string;
            }
          | {
              url?: string;
              _type: "externalLink";
              _key: string;
            }
        >;
        level?: number;
        _type: "block";
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string;
        _type: "image";
        _key: string;
      }
  >;
};

export type Experience = {
  _id: string;
  _type: "experience";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    _type: "image";
  };
  title: string;
  slug: Slug;
  description: string;
  company: string;
  dateRange: {
    startDate: string;
    endDate?: string;
  };
  repositoryLinks?: Array<{
    label: string;
    url: string;
    _type: "repositoryLink";
    _key: string;
  }>;
  deploymentLinks?: Array<{
    label: string;
    url: string;
    _type: "deploymentLink";
    _key: string;
  }>;
  content: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
        listItem?: "bullet" | "number";
        markDefs?: Array<
          | {
              reference:
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "projects";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "experience";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "awards";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "blog";
                  };
              _type: "internalLink";
              _key: string;
            }
          | {
              url?: string;
              _type: "externalLink";
              _key: string;
            }
        >;
        level?: number;
        _type: "block";
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string;
        _type: "image";
        _key: string;
      }
  >;
};

export type Awards = {
  _id: string;
  _type: "awards";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    _type: "image";
  };
  title: string;
  slug: Slug;
  description: string;
  issuer: string;
  date: string;
  content: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
        listItem?: "bullet" | "number";
        markDefs?: Array<
          | {
              reference:
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "projects";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "experience";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "awards";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "blog";
                  };
              _type: "internalLink";
              _key: string;
            }
          | {
              url?: string;
              _type: "externalLink";
              _key: string;
            }
        >;
        level?: number;
        _type: "block";
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string;
        _type: "image";
        _key: string;
      }
  >;
};

export type Blog = {
  _id: string;
  _type: "blog";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image: {
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    _type: "image";
  };
  title: string;
  slug: Slug;
  description: string;
  date: string;
  content: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
        listItem?: "bullet" | "number";
        markDefs?: Array<
          | {
              reference:
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "projects";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "experience";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "awards";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "blog";
                  };
              _type: "internalLink";
              _key: string;
            }
          | {
              url?: string;
              _type: "externalLink";
              _key: string;
            }
        >;
        level?: number;
        _type: "block";
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string;
        _type: "image";
        _key: string;
      }
  >;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};
export declare const internalGroqTypeReferenceTo: unique symbol;

// Source: ./src/lib/query.ts
// Variable: homePageQuery
// Query:   *[_type == "home-page"][0] {    _id,    title,    content,    "image": {      "url": image.asset->url,      "alt": image.alt,    }  }
export type HomePageQueryResult = {
  _id: string;
  title: string;
  content: Array<
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string;
        _type: "image";
        _key: string;
      }
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet" | "number";
        markDefs?: Array<
          | {
              reference:
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "awards";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "blog";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "experience";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "projects";
                  };
              _type: "internalLink";
              _key: string;
            }
          | {
              url?: string;
              _type: "externalLink";
              _key: string;
            }
        >;
        level?: number;
        _type: "block";
        _key: string;
      }
  >;
  image: {
    url: string | null;
    alt: string;
  };
} | null;
// Variable: projectsPageQuery
// Query:   *[_type == "projects-page"][0] {    _id,    title,    description,  }
export type ProjectsPageQueryResult = {
  _id: string;
  title: string;
  description: string;
} | null;
// Variable: allProjectsQuery
// Query:   *[_type == "projects"] | order(dateRange.startDate desc) {    _id,    "image": {      "url": image.asset->url,      "alt": image.alt,    },    title,    slug,    description,    dateRange,    repositoryLinks,    deploymentLinks,  }
export type AllProjectsQueryResult = Array<{
  _id: string;
  image: {
    url: string | null;
    alt: string;
  };
  title: string;
  slug: Slug;
  description: string;
  dateRange: {
    startDate: string;
    endDate?: string;
  };
  repositoryLinks: Array<{
    label: string;
    url: string;
    _type: "repositoryLink";
    _key: string;
  }> | null;
  deploymentLinks: Array<{
    label: string;
    url: string;
    _type: "deploymentLink";
    _key: string;
  }> | null;
}>;
// Variable: projectDetailQuery
// Query:   *[_type == "projects" && slug.current == $slug][0] {    _id,    "image": {      "url": image.asset->url,      "alt": image.alt,    },    title,    slug,    description,    dateRange,    repositoryLinks,    deploymentLinks,    content[]{      ...,      markDefs[]{        ...,        _type == "internalLink" => {          ...,          "href": "/" + @.reference->_type + "/" + @.reference->slug.current,        },        _type == "externalLink" => {          ...,          "href": url,        },      },      _type == "image" => {        ...,        "url": asset->url,        "alt": alt,      }    },  }
export type ProjectDetailQueryResult = {
  _id: string;
  image: {
    url: string | null;
    alt: string;
  };
  title: string;
  slug: Slug;
  description: string;
  dateRange: {
    startDate: string;
    endDate?: string;
  };
  repositoryLinks: Array<{
    label: string;
    url: string;
    _type: "repositoryLink";
    _key: string;
  }> | null;
  deploymentLinks: Array<{
    label: string;
    url: string;
    _type: "deploymentLink";
    _key: string;
  }> | null;
  content: Array<
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string;
        _type: "image";
        markDefs: null;
        url: string | null;
      }
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet" | "number";
        markDefs: Array<
          | {
              reference:
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "awards";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "blog";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "experience";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "projects";
                  };
              _type: "internalLink";
              href: string;
            }
          | {
              url?: string;
              _type: "externalLink";
              href: string | null;
            }
        > | null;
        level?: number;
        _type: "block";
      }
  >;
} | null;
// Variable: experiencePageQuery
// Query:   *[_type == "experience-page"][0] {    _id,    title,    description,  }
export type ExperiencePageQueryResult = {
  _id: string;
  title: string;
  description: string;
} | null;
// Variable: allExperiencesQuery
// Query:   *[_type == "experience"] | order(dateRange.startDate desc) {    _id,    "image": {      "url": image.asset->url,      "alt": image.alt    },    title,    slug,    description,    dateRange,    company,    repositoryLinks,    deploymentLinks,  }
export type AllExperiencesQueryResult = Array<{
  _id: string;
  image: {
    url: string | null;
    alt: string;
  };
  title: string;
  slug: Slug;
  description: string;
  dateRange: {
    startDate: string;
    endDate?: string;
  };
  company: string;
  repositoryLinks: Array<{
    label: string;
    url: string;
    _type: "repositoryLink";
    _key: string;
  }> | null;
  deploymentLinks: Array<{
    label: string;
    url: string;
    _type: "deploymentLink";
    _key: string;
  }> | null;
}>;
// Variable: experienceDetailQuery
// Query:   *[_type == "experience" && slug.current == $slug][0] {    _id,    "image": {      "url": image.asset->url,      "alt": image.alt    },    title,    slug,    description,    dateRange,    company,    repositoryLinks,    deploymentLinks,    content[]{      ...,      markDefs[]{        ...,        _type == "internalLink" => {          ...,          "href": "/" + @.reference->_type + "/" + @.reference->slug.current,        },        _type == "externalLink" => {          ...,          "href": url,        },      },      _type == "image" => {        ...,        "url": asset->url,        "alt": alt,      }    },  }
export type ExperienceDetailQueryResult = {
  _id: string;
  image: {
    url: string | null;
    alt: string;
  };
  title: string;
  slug: Slug;
  description: string;
  dateRange: {
    startDate: string;
    endDate?: string;
  };
  company: string;
  repositoryLinks: Array<{
    label: string;
    url: string;
    _type: "repositoryLink";
    _key: string;
  }> | null;
  deploymentLinks: Array<{
    label: string;
    url: string;
    _type: "deploymentLink";
    _key: string;
  }> | null;
  content: Array<
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string;
        _type: "image";
        markDefs: null;
        url: string | null;
      }
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet" | "number";
        markDefs: Array<
          | {
              reference:
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "awards";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "blog";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "experience";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "projects";
                  };
              _type: "internalLink";
              href: string;
            }
          | {
              url?: string;
              _type: "externalLink";
              href: string | null;
            }
        > | null;
        level?: number;
        _type: "block";
      }
  >;
} | null;
// Variable: awardsPageQuery
// Query:   *[_type == "awards-page"][0] {    _id,    title,    description,  }
export type AwardsPageQueryResult = {
  _id: string;
  title: string;
  description: string;
} | null;
// Variable: allAwardsQuery
// Query:   *[_type == "awards"] | order(date desc) {    _id,    "image": {      "url": image.asset->url,      "alt": image.alt    },    title,    slug,    description,    issuer,    date,  }
export type AllAwardsQueryResult = Array<{
  _id: string;
  image: {
    url: string | null;
    alt: string;
  };
  title: string;
  slug: Slug;
  description: string;
  issuer: string;
  date: string;
}>;
// Variable: awardDetailQuery
// Query:   *[_type == "awards" && slug.current == $slug][0] {    _id,    "image": {      "url": image.asset->url,      "alt": image.alt    },    title,    slug,    description,    issuer,    date,    content[]{      ...,      markDefs[]{        ...,        _type == "internalLink" => {          ...,          "href": "/" + @.reference->_type + "/" + @.reference->slug.current,        },        _type == "externalLink" => {          ...,          "href": url,        },      },      _type == "image" => {        ...,        "url": asset->url,        "alt": alt,      }    },  }
export type AwardDetailQueryResult = {
  _id: string;
  image: {
    url: string | null;
    alt: string;
  };
  title: string;
  slug: Slug;
  description: string;
  issuer: string;
  date: string;
  content: Array<
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string;
        _type: "image";
        markDefs: null;
        url: string | null;
      }
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet" | "number";
        markDefs: Array<
          | {
              reference:
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "awards";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "blog";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "experience";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "projects";
                  };
              _type: "internalLink";
              href: string;
            }
          | {
              url?: string;
              _type: "externalLink";
              href: string | null;
            }
        > | null;
        level?: number;
        _type: "block";
      }
  >;
} | null;
// Variable: blogPageQuery
// Query:   *[_type == "blog-page"][0] {    _id,    title,    description,  }
export type BlogPageQueryResult = {
  _id: string;
  title: string;
  description: string;
} | null;
// Variable: allBlogsQuery
// Query:   *[_type == "blog"] | order(date desc) {    _id,    "image": {      "url": image.asset->url,      "alt": image.alt,    },    title,    slug,    description,    date,  }
export type AllBlogsQueryResult = Array<{
  _id: string;
  image: {
    url: string | null;
    alt: string;
  };
  title: string;
  slug: Slug;
  description: string;
  date: string;
}>;
// Variable: blogDetailQuery
// Query:   *[_type == "blog" && slug.current == $slug][0] {    _id,    "image": {      "url": image.asset->url,      "alt": image.alt,    },    title,    slug,    description,    date,    content[]{      ...,      markDefs[]{        ...,        _type == "internalLink" => {          ...,          "href": "/" + @.reference->_type + "/" + @.reference->slug.current,        },        _type == "externalLink" => {          ...,          "href": url,        },      },      _type == "image" => {        ...,        "url": asset->url,        "alt": alt,      }    },  }
export type BlogDetailQueryResult = {
  _id: string;
  image: {
    url: string | null;
    alt: string;
  };
  title: string;
  slug: Slug;
  description: string;
  date: string;
  content: Array<
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string;
        _type: "image";
        markDefs: null;
        url: string | null;
      }
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet" | "number";
        markDefs: Array<
          | {
              reference:
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "awards";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "blog";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "experience";
                  }
                | {
                    _ref: string;
                    _type: "reference";
                    _weak?: boolean;
                    [internalGroqTypeReferenceTo]?: "projects";
                  };
              _type: "internalLink";
              href: string;
            }
          | {
              url?: string;
              _type: "externalLink";
              href: string | null;
            }
        > | null;
        level?: number;
        _type: "block";
      }
  >;
} | null;
