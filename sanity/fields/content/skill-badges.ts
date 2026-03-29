import { defineArrayMember } from "sanity";
import { SkillBadgesPreview } from "../../components/portable-text/other/skill-badges-preview";
import { skillReferencesField } from "../skill";

export const skillBadgesField = () =>
  defineArrayMember({
    name: "skillBadges",
    title: "Skill Badges",
    type: "object",
    components: {
      preview: SkillBadgesPreview,
    },
    preview: {
      select: {
        skills: "skills",
      },
    },
    fields: [
      skillReferencesField({
        name: "skills",
        title: "Skills",
        description: "Select skills in the exact order they should appear",
      }),
    ],
  });
