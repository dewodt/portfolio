import type { PreviewProps } from "sanity";
import { resolveContributorProfiles } from "../../../../src/lib/contributor-profile";

export function ContributorsPreview(
  props: PreviewProps & {
    contributors?: Array<{ profileUrl?: string }>;
  },
) {
  const contributors = resolveContributorProfiles(props.contributors);

  if (contributors.length === 0) {
    return (
      <div
        style={{
          border: "1px dashed rgba(148, 163, 184, 0.3)",
          borderRadius: "0.75rem",
          padding: "0.85rem 1rem",
          color: "#94a3b8",
          fontSize: "0.875rem",
          background: "rgba(15, 23, 42, 0.12)",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        Add at least one GitHub profile URL.
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid rgba(148, 163, 184, 0.18)",
        borderRadius: "0.75rem",
        padding: "0.9rem 1rem",
        background: "rgba(15, 23, 42, 0.2)",
        display: "grid",
        gap: "0.65rem",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {contributors.map((contributor) => (
        <div
          key={contributor.profileUrl}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.65rem",
          }}
        >
          <img
            src={contributor.avatarUrl}
            alt={contributor.username}
            style={{
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "9999px",
              objectFit: "cover",
              flexShrink: 0,
              background: "rgba(107, 114, 128, 0.9)",
            }}
          />
          <div style={{ display: "grid", gap: "0.1rem" }}>
            <span
              style={{
                color: "#e5e7eb",
                fontSize: "0.9rem",
                lineHeight: 1.1,
                fontWeight: 500,
                fontFamily:
                  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              {contributor.displayName}
            </span>
            <span
              style={{
                color: "#94a3b8",
                fontSize: "0.75rem",
                lineHeight: 1.1,
                fontFamily:
                  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              GitHub
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
