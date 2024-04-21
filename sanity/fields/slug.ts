import { defineField } from "sanity";

// Default: unique in a document
export const slugField = defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  description: "The URL path for this document",
  options: {
    // Generate slugs
    source: (doc) => {
      if (doc._type === "experience") {
        // For experiences, use the company name and position (to avoid duplicates)
        const posititon = doc.title as string;
        const company = doc.company as string;
        return `${company}-${posititon}`;
      } else if (doc._type === "awards") {
        // For awards, use the issuer and title (to avoid duplicates)
        const title = doc.title as string;
        const issuer = doc.issuer as string;
        return `${issuer}-${title}`;
      }

      // Other, user title
      return doc.title as string;
    },
  },
  validation: (Rule) => Rule.required().error("A slug is required"),
});
