import groq from "groq";
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
  useCdn: false, // Statically build no need cdn
  apiVersion: "2024-04-19", // Set to date of setup to use the latest API version
  perspective: "published", // Use the published dataset
});

// Use slug to query params a single (non single instance) document

export const homeDetailQuery = groq`
  *[_type == "home"][0] {
    _id,
    content,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
    }
  }
`;

export const allProjectsQuery = groq`
  *[_type == "projects"] | order(dateRange.startDate desc) {
    _id,
    title,
    slug,
    description,
    dateRange,
    repositoryLinks,
    deploymentLinks,
    "image": {
      "url": gallery[0].asset->url,
      "alt": gallery[0].alt,
    },
  }
`;

export const projectDetailQuery = groq`
  *[_type == "projects" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    dateRange,
    repositoryLinks,
    deploymentLinks,
    content[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          ...,
          "href": "/" + @.reference->_type + "/" + @.reference->slug.current,
        },
        _type == "externalLink" => {
          ...,
          "href": url,
        },
      },
      _type == "image" => {
        ...,
        "url": asset->url,
        "alt": alt,
      }
    },
    gallery[] {
      "url": asset->url,
      "alt": alt,
    },
  }
`;

export const allExperiencesQuery = groq`
  *[_type == "experience"] | order(dateRange.startDate desc) {
    _id,
    title,
    slug,
    description,
    dateRange,
    company,
    repositoryLinks,
    deploymentLinks,
  }
`;

export const experienceDetailQuery = groq`
  *[_type == "experience" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    dateRange,
    company,
    repositoryLinks,
    deploymentLinks,
    content[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          ...,
          "href": "/" + @.reference->_type + "/" + @.reference->slug.current,
        },
        _type == "externalLink" => {
          ...,
          "href": url,
        },
      },
      _type == "image" => {
        ...,
        "url": asset->url,
        "alt": alt,
      }
    },
  }
`;

export const allAwardsQuery = groq`
  *[_type == "awards"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    issuer,
    date,
  }
`;

export const awardDetailQuery = groq`
  *[_type == "awards" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    issuer,
    date,
    content[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          ...,
          "href": "/" + @.reference->_type + "/" + @.reference->slug.current,
        },
        _type == "externalLink" => {
          ...,
          "href": url,
        },
      },
      _type == "image" => {
        ...,
        "url": asset->url,
        "alt": alt,
      }
    },
  }
`;

export const allBlogsQuery = groq`
  *[_type == "blog"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    date,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
    },
    content[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          ...,
          "href": "/" + @.reference->_type + "/" + @.reference->slug.current,
        },
        _type == "externalLink" => {
          ...,
          "href": url,
        },
      },
      _type == "image" => {
        ...,
        "url": asset->url,
        "alt": alt,
      }
    },
  }
`;

export const blogDetailQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    date,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
    },
    content[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          ...,
          "href": "/" + @.reference->_type + "/" + @.reference->slug.current,
        },
        _type == "externalLink" => {
          ...,
          "href": url,
        },
      },
      _type == "image" => {
        ...,
        "url": asset->url,
        "alt": alt,
      }
    },
  }
`;
