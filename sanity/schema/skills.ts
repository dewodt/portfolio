import { createElement } from "react";
import { defineType, useClient, useColorSchemeValue } from "sanity";
import { SkillsIcon } from "../components/icon/skills-icon";
import { skillFields } from "../fields/skill";
import { resolvePreviewImageUrl } from "../utils/image-preview";

function SkillPreviewMedia({
  logoLight,
  logoDark,
}: {
  logoLight?: unknown;
  logoDark?: unknown;
}) {
  const scheme = useColorSchemeValue();
  const client = useClient({ apiVersion: "2024-04-19" });
  const logo = scheme === "dark" ? logoDark : logoLight;
  const src = resolvePreviewImageUrl(client, logo);

  if (!src) {
    return null;
  }

  return createElement("img", {
    src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  });
}

export const skillsSchema = defineType({
  name: "skills",
  title: "Skill",
  type: "document",
  icon: SkillsIcon,
  fields: skillFields(),
  preview: {
    select: {
      title: "title",
      subtitle: "url",
      logoLight: "logoLight",
      logoDark: "logoDark",
    },
    prepare({ title, subtitle, logoLight, logoDark }) {
      return {
        title,
        subtitle,
        media: createElement(SkillPreviewMedia, {
          logoLight,
          logoDark,
        }),
      };
    },
  },
});
