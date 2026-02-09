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

export const aboutPageQuery = groq`
  *[_type == "about-page"][0] {
    _id,
    heroMonoLabel,
    location,
    title,
    content,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
    },
    educationMonoLabel,
    educationSectionTitle,
    educationSectionDescription,
    education[]{
      "image": {
        "url": image.asset->url,
        "alt": image.alt,
      },
      degree,
      university,
      dateRange,
      description,
    },
    skillsMonoLabel,
    skillsSectionTitle,
    skillsSectionDescription,
    skillCategories[]{
      categoryTitle,
      skills[]{
        title,
        "logoLight": logoLight.asset->url,
        "logoDark": logoDark.asset->url,
      }
    }
  }
`;

export const projectsPageQuery = groq`
  *[_type == "projects-page"][0] {
    _id,
    monoLabel,
    detailMonoLabel,
    title,
    description,
  }
`;

export const allProjectsQuery = groq`
  *[_type == "projects"] | order(dateRange.startDate desc) {
    _id,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
    },
    title,
    slug,
    description,
    dateRange,
    repositoryLinks,
    deploymentLinks,
  }
`;

export const projectDetailQuery = groq`
  *[_type == "projects" && slug.current == $slug][0] {
    _id,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
    },
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
    "detailMonoLabel": *[_type == "projects-page"][0].detailMonoLabel,
    "previous": *[_type == "projects" && dateRange.startDate < ^.dateRange.startDate] | order(dateRange.startDate desc) [0] {
      _id,
      title,
      slug,
      description,
      dateRange
    },
    "next": *[_type == "projects" && dateRange.startDate > ^.dateRange.startDate] | order(dateRange.startDate) [0] {
      _id,
      title,
      slug,
      description,
      dateRange
    },
  }
`;

export const experiencePageQuery = groq`
  *[_type == "experiences-page"][0] {
    _id,
    monoLabel,
    detailMonoLabel,
    title,
    description,
  }
`;

export const allExperiencesQuery = groq`
  *[_type == "experiences"] | order(dateRange.startDate desc) {
    _id,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
    title,
    slug,
    description,
    dateRange,
    company,
    location,
    repositoryLinks,
    deploymentLinks,
  }
`;

export const experienceDetailQuery = groq`
  *[_type == "experiences" && slug.current == $slug][0] {
    _id,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
    title,
    slug,
    description,
    dateRange,
    company,
    location,
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
    "detailMonoLabel": *[_type == "experiences-page"][0].detailMonoLabel,
    "previous": *[_type == "experiences" && dateRange.startDate < ^.dateRange.startDate] | order(dateRange.startDate desc) [0] {
      _id,
      title,
      slug,
      description,
      dateRange,
      company
    },
    "next": *[_type == "experiences" && dateRange.startDate > ^.dateRange.startDate] | order(dateRange.startDate) [0] {
      _id,
      title,
      slug,
      description,
      dateRange,
      company
    },
  }
`;

export const awardsPageQuery = groq`
  *[_type == "awards-page"][0] {
    _id,
    monoLabel,
    detailMonoLabel,
    title,
    description,
  }
`;

export const allAwardsQuery = groq`
  *[_type == "awards"] | order(date desc) {
    _id,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
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
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
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
    "detailMonoLabel": *[_type == "awards-page"][0].detailMonoLabel,
    "previous": *[_type == "awards" && date < ^.date] | order(date desc) [0] {
      _id,
      title,
      slug,
      description,
      issuer,
      date
    },
    "next": *[_type == "awards" && date > ^.date] | order(date) [0] {
      _id,
      title,
      slug,
      description,
      issuer,
      date
    },
  }
`;

export const socialsQuery = groq`
  *[_type == "socials"][0] {
    _id,
    socialLinks[]{ name, url, "iconLight": iconLight.asset->url, "iconDark": iconDark.asset->url }
  }
`;

export const blogPageQuery = groq`
  *[_type == "blogs-page"][0] {
    _id,
    monoLabel,
    detailMonoLabel,
    title,
    description,
  }
`;

export const allBlogsQuery = groq`
  *[_type == "blogs"] | order(date desc) {
    _id,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
    },
    title,
    slug,
    description,
    date,
  }
`;

export const blogDetailQuery = groq`
  *[_type == "blogs" && slug.current == $slug][0] {
    _id,
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
    },
    title,
    slug,
    description,
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
    "detailMonoLabel": *[_type == "blogs-page"][0].detailMonoLabel,
    "previous": *[_type == "blogs" && date < ^.date] | order(date desc) [0] {
      _id,
      title,
      slug,
      description,
      date
    },
    "next": *[_type == "blogs" && date > ^.date] | order(date) [0] {
      _id,
      title,
      slug,
      description,
      date
    },
  }
`;
