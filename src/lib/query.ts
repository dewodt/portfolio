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
    }
  },
`;

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

export const allExperienceCompaniesQuery = groq`
  *[
    _type == "companies" &&
    count(*[_type == "experiences" && defined(company._ref) && company._ref == ^._id && defined(slug.current)]) > 0
  ] {
    _id,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
    "company": name,
    "companySummary": summary,
    "latestRoleStartDate": *[_type == "experiences" && defined(company._ref) && company._ref == ^._id && defined(slug.current)] | order(dateRange.startDate desc, slug.current asc)[0].dateRange.startDate,
    "roles": *[_type == "experiences" && defined(company._ref) && company._ref == ^._id && defined(slug.current)] | order(dateRange.startDate desc, slug.current asc) {
      _id,
      _key,
      title,
      slug,
      employmentType,
      dateRange,
      location,
      repositoryLinks,
      deploymentLinks,
    },
  }
  | order(latestRoleStartDate desc, company asc)
`;

export const experienceRoleDetailQuery = groq`
  *[_type == "experiences" && slug.current == $slug && defined(company._ref)][0] {
    _id,
    title,
    slug,
    employmentType,
    dateRange,
    location,
    repositoryLinks,
    deploymentLinks,
    ${portableTextContentProjection}
    "company": {
      "name": company->name,
      "summary": company->summary,
      "image": {
        "url": company->image.asset->url,
        "alt": company->image.alt
      }
    },
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
