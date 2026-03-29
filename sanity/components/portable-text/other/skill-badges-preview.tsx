import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useMemo, useState } from "react";
import { useClient, useColorSchemeValue } from "sanity";
import type { PreviewProps } from "sanity";

function SkillBadgePreview({
  title,
  logoLight,
  logoDark,
}: {
  title: string;
  logoLight?: unknown;
  logoDark?: unknown;
}) {
  const client = useClient({ apiVersion: "2024-04-19" });
  const scheme = useColorSchemeValue();
  const logo = scheme === "dark" ? logoDark : logoLight;
  const logoUrl = logo
    ? imageUrlBuilder(client)
        .image(logo as any)
        .url()
    : null;

  return (
    <div
      style={{
        border: "1px solid rgba(148, 163, 184, 0.18)",
        background: "rgba(15, 23, 42, 0.42)",
        color: "#e5e7eb",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        borderRadius: "0.75rem",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.55rem 0.95rem",
        minHeight: "2.25rem",
      }}
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt=""
          style={{
            height: "1rem",
            width: "auto",
            display: "block",
            flexShrink: 0,
          }}
        />
      ) : null}
      <span
        style={{
          fontSize: "0.875rem",
          lineHeight: 1,
          fontWeight: 500,
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </span>
    </div>
  );
}

export function SkillBadgesPreview(
  props: PreviewProps & {
    skills?: Array<{ _ref?: string }>;
  },
) {
  const client = useClient({ apiVersion: "2024-04-19" });
  const skillIds = useMemo(
    () =>
      (props.skills || [])
        .map((skill) => skill?._ref)
        .filter((skillId): skillId is string => Boolean(skillId)),
    [props.skills],
  );
  const [skills, setSkills] = useState<
    Array<{
      _id: string;
      title: string;
      logoLight?: unknown;
      logoDark?: unknown;
    }>
  >([]);

  useEffect(() => {
    let cancelled = false;

    if (skillIds.length === 0) {
      setSkills([]);
      return;
    }

    client
      .fetch(
        `*[_type == "skills" && _id in $ids]{
          _id,
          title,
          logoLight,
          logoDark
        }`,
        { ids: skillIds },
      )
      .then((result) => {
        if (cancelled) {
          return;
        }

        const skillsById = new Map(
          (
            result as Array<{
              _id: string;
              title: string;
              logoLight?: unknown;
              logoDark?: unknown;
            }>
          ).map((skill) => [skill._id, skill]),
        );

        setSkills(
          skillIds
            .map((id) => skillsById.get(id))
            .filter(
              (
                skill,
              ): skill is {
                _id: string;
                title: string;
                logoLight?: unknown;
                logoDark?: unknown;
              } => Boolean(skill),
            ),
        );
      })
      .catch(() => {
        if (!cancelled) {
          setSkills([]);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [client, skillIds]);

  return (
    <div
      style={{
        border: "1px solid rgba(148, 163, 184, 0.22)",
        borderRadius: "0.75rem",
        padding: "1rem",
        background: "rgba(15, 23, 42, 0.2)",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        {skills.map((skill) => (
          <SkillBadgePreview
            key={skill._id}
            title={skill.title}
            logoLight={skill.logoLight}
            logoDark={skill.logoDark}
          />
        ))}
      </div>
    </div>
  );
}
