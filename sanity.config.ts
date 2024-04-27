import { schemaTypes } from "./sanity/schema";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { HomeIcon } from "./sanity/components/icon/home-icon";
import { ProjectsIcon } from "./sanity/components/icon/projects-icon";
import { ExperienceIcon } from "./sanity/components/icon/experience-icon";
import { AwardsIcon } from "./sanity/components/icon/awards-icon";
import { BlogIcon } from "./sanity/components/icon/blog-icon";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

// Add the import to the theme.js downloaded
import { theme as _theme } from "./sanity/config/theme";

// Assign typings to theme
const theme = _theme as import("sanity").StudioTheme;

// Get project id & dataset
const projectId =
  import.meta.env?.PUBLIC_SANITY_STUDIO_PROJECT_ID ?? // added "?"" for typegen cli
  import.meta.env.SANITY_STUDIO_PROJECT_ID;
const dataset =
  import.meta.env?.PUBLIC_SANITY_STUDIO_DATASET ?? // added "?"" for typegen cli
  import.meta.env.SANITY_STUDIO_DATASET;

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set(["home"]);

// Sanity config
export default defineConfig({
  name: "portfolio",
  title: "Portfolio",
  theme,
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Home
            S.listItem()
              .title("Home Page")
              .id("home-page")
              .icon(HomeIcon)
              .child(
                S.document().schemaType("home-page").documentId("home-page"),
              ),

            // Projects
            S.listItem()
              .title("Projects Page")
              .id("projects-page")
              .icon(ProjectsIcon)
              .child(
                S.document()
                  .schemaType("projects-page")
                  .documentId("projects-page"),
              ),
            S.documentTypeListItem("projects").title("Projects List"),

            // Experience
            S.listItem()
              .title("Experience Page")
              .id("experience-page")
              .icon(ExperienceIcon)
              .child(
                S.document()
                  .schemaType("experience-page")
                  .documentId("experience-page"),
              ),
            S.documentTypeListItem("experience").title("Experience List"),

            // Awards
            S.listItem()
              .title("Awards Page")
              .id("awards-page")
              .icon(AwardsIcon)
              .child(
                S.document()
                  .schemaType("awards-page")
                  .documentId("awards-page"),
              ),
            S.documentTypeListItem("awards").title("Awards List"),

            // Blog
            S.listItem()
              .title("Blog Page")
              .id("blog-page")
              .icon(BlogIcon)
              .child(
                S.document().schemaType("blog-page").documentId("blog-page"),
              ),
            S.documentTypeListItem("blog").title("Blog List"),
          ]),
    }),
    visionTool(),
    vercelDeployTool(),
  ],
  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
