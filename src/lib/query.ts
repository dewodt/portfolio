import groq from "groq";
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
  useCdn: false, // Statically build no need cdn
  apiVersion: "2024-04-19", // Set to date of setup to use the latest API version
  perspective: "published", // Use the published dataset
});

const internalLinkHrefProjection = `
  "href": "/" + @.reference->_type + "/" + @.reference->slug.current,
`;

const skillProjection = `
  _id,
  title,
  url,
  "logoLight": logoLight.asset->url,
  "logoDark": logoDark.asset->url,
`;

const portableTextContentProjection = `
  content[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        ...,
        ${internalLinkHrefProjection}
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
      "maxWidth": coalesce(maxWidth, "full"),
    },
    _type == "skillBadges" => {
      ...,
      skills[]->{
        ${skillProjection}
      }
    }
  },
`;

export const aboutPageQuery = groq`
  *[_type == "about-page"][0] {
    _id,
    heroMonoLabel,
    location,
    title,
    ${portableTextContentProjection}
    "image": {
      "url": image.asset->url,
      "alt": image.alt,
    },
    educationMonoLabel,
    educationSectionTitle,
    educationSectionDescription,
    education[]{
      _key,
      "image": {
        "url": image.asset->url,
        "alt": image.alt,
      },
      degree,
      university,
      dateRange,
      description,
      link,
    },
    skillsMonoLabel,
    skillsSectionTitle,
    skillsSectionDescription,
    skillCategories[]{
      categoryTitle,
      skills[]->{
        ${skillProjection}
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
    ${portableTextContentProjection}
    "detailMonoLabel": *[_type == "projects-page"][0].detailMonoLabel,
    "previous": *[_type == "projects" && dateRange.startDate > ^.dateRange.startDate] | order(dateRange.startDate) [0] {
      _id,
      title,
      slug,
      description,
      dateRange
    },
    "next": *[_type == "projects" && dateRange.startDate < ^.dateRange.startDate] | order(dateRange.startDate desc) [0] {
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
  *[_type == "experiences" && defined(slug.current) && count(roles) > 0] {
    _id,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
    company,
    companySummary,
    slug,
    "latestRoleStartDate": roles[] | order(dateRange.startDate desc)[0].dateRange.startDate,
    "roles": roles[] | order(dateRange.startDate desc) {
      _key,
      title,
      employmentType,
      dateRange,
      location,
      repositoryLinks,
      deploymentLinks,
    },
  }
  | order(latestRoleStartDate desc, company asc)
`;

export const experienceDetailQuery = groq`
  *[_type == "experiences" && slug.current == $slug && count(roles) > 0][0] {
    _id,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
    company,
    companySummary,
    slug,
    "latestRoleStartDate": roles[] | order(dateRange.startDate desc)[0].dateRange.startDate,
    "roles": roles[] | order(dateRange.startDate desc) {
      _key,
      title,
      employmentType,
      dateRange,
      location,
      repositoryLinks,
      deploymentLinks,
    },
    ${portableTextContentProjection}
    "detailMonoLabel": *[_type == "experiences-page"][0].detailMonoLabel
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
    ${portableTextContentProjection}
    "detailMonoLabel": *[_type == "awards-page"][0].detailMonoLabel,
    "previous": *[_type == "awards" && date > ^.date] | order(date) [0] {
      _id,
      title,
      slug,
      description,
      issuer,
      date
    },
    "next": *[_type == "awards" && date < ^.date] | order(date desc) [0] {
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
    socialLinks[]{
      name,
      url,
      "iconLight": {
        "url": iconLight.asset->url,
        "alt": iconLight.alt,
      },
      "iconDark": {
        "url": iconDark.asset->url,
        "alt": iconDark.alt,
      }
    }
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
    ${portableTextContentProjection}
    "detailMonoLabel": *[_type == "blogs-page"][0].detailMonoLabel,
    "authorName": *[_type == "about-page"][0].title,
    "authorImage": {
      "url": *[_type == "about-page"][0].image.asset->url,
      "alt": *[_type == "about-page"][0].image.alt,
    },
    "previous": *[_type == "blogs" && date > ^.date] | order(date) [0] {
      _id,
      title,
      slug,
      description,
      date
    },
    "next": *[_type == "blogs" && date < ^.date] | order(date desc) [0] {
      _id,
      title,
      slug,
      description,
      date
    },
  }
`;
