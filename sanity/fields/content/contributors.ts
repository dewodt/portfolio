import { defineArrayMember, defineField } from "sanity";
import { ContributorsPreview } from "../../components/portable-text/other/contributors-preview";
import { buildCollectionValidation } from "../../utils/validation";
import { resolveContributorProfile } from "../../../src/lib/contributor-profile";

const contributorProfileUrlField = () =>
  defineField({
    name: "profileUrl",
    title: "Profile URL",
    type: "url",
    description: "Paste a GitHub profile URL",
    validation: (Rule) =>
      Rule.required()
        .uri({ scheme: ["http", "https"] })
        .custom((value) => {
          if (typeof value !== "string") {
            return "Profile URL is required";
          }

          return resolveContributorProfile(value)
            ? true
            : "Use a GitHub profile URL with a valid username";
        }),
  });

const contributorProfileField = () =>
  defineArrayMember({
    name: "contributorProfile",
    title: "Contributor",
    type: "object",
    preview: {
      select: {
        profileUrl: "profileUrl",
      },
      prepare({ profileUrl }) {
        const contributor = resolveContributorProfile(profileUrl);

        if (!contributor) {
          return {
            title: "Invalid contributor profile",
            subtitle: profileUrl || "Add a GitHub or GitLab profile URL",
          };
        }

        return {
          title: contributor.displayName,
          subtitle: contributor.profileUrl,
        };
      },
    },
    fields: [contributorProfileUrlField()],
  });

export const contributorsField = () =>
  defineArrayMember({
    name: "contributors",
    title: "Contributors",
    type: "object",
    components: {
      preview: ContributorsPreview,
    },
    preview: {
      select: {
        contributors: "contributors",
      },
    },
    fields: [
      defineField({
        name: "contributors",
        title: "Contributor Profiles",
        type: "array",
        description:
          "Add contributors in the exact order they should appear using GitHub profile URLs",
        validation: buildCollectionValidation("Contributor Profiles", {
          required: true,
          min: 1,
        }),
        of: [contributorProfileField()],
      }),
    ],
  });
