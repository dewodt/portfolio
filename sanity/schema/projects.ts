import { defineType } from "sanity";
import { contentField } from "../fields/content";
import { repositoryLinksField } from "../fields/repository-links";
import { deploymentLinksField } from "../fields/deployment-links";
import { galleryField } from "../fields/gallery";
import { techStacksField } from "../fields/tech-stacks";
import { shortTitleField } from "../fields/short-title";
import { dateRangeField } from "../fields/date-range";

export const projectsSchema = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    shortTitleField,
    dateRangeField,
    techStacksField,
    repositoryLinksField,
    deploymentLinksField,
    contentField,
    galleryField,
  ],
});
