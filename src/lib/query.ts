import groq from "groq";
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
  useCdn: false, // Statically build no need cdn
  apiVersion: "2024-04-19", // Set to date of setup to use the latest API version
  perspective: "published", // Use the published dataset
});

export const fetchSanityData = async <T>(groqQuery: string): Promise<T> => {
  const result = await sanityClient.fetch(groqQuery);
  return result;
};

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
    content,
    gallery[] {
      "url": asset->url,
      "alt": alt,
    },
  }
`;

export const allExperiencesQuery = groq`
  *[_type == "experiences"] | order(dateRange.startDate desc) {
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
  *[_type == "experiences" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    dateRange,
    company,
    repositoryLinks,
    deploymentLinks,
    content,
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
    content,
  }
`;

export const allBlogsQuery = groq`
  *[_type == "blogs"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    date,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
    },
    content,
  }
`;

export const blogDetailQuery = groq`
  *[_type == "blogs" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    date,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
    },
    content,
  }
`;
