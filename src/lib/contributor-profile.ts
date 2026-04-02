export type ContributorProfileInput = {
  profileUrl?: string | null;
};

export type ResolvedContributorProfile = {
  username: string;
  displayName: string;
  profileUrl: string;
  avatarUrl: string;
};

const GITHUB_USERNAME_PATTERN = /^(?!-)(?!.*--)[A-Za-z\d-]{1,39}(?<!-)$/;

const normalizeHost = (value: string) =>
  value.toLowerCase().replace(/^www\./, "");

const isValidGitHubUsername = (value: string) =>
  GITHUB_USERNAME_PATTERN.test(value);

export const resolveContributorProfile = (
  value?: string | null,
): ResolvedContributorProfile | null => {
  if (!value?.trim()) {
    return null;
  }

  try {
    const url = new URL(value.trim());
    const host = normalizeHost(url.hostname);

    if (host !== "github.com") {
      return null;
    }

    if (!["http:", "https:"].includes(url.protocol)) {
      return null;
    }

    const segments = url.pathname.split("/").filter(Boolean);

    if (segments.length !== 1) {
      return null;
    }

    const username = decodeURIComponent(segments[0]);

    if (!isValidGitHubUsername(username)) {
      return null;
    }

    const encodedUsername = encodeURIComponent(username);
    const baseUrl = `https://github.com/${encodedUsername}`;

    return {
      username,
      displayName: username,
      profileUrl: baseUrl,
      avatarUrl: `https://avatars.githubusercontent.com/${encodedUsername}?size=460`,
    };
  } catch {
    return null;
  }
};

export const resolveContributorProfiles = (
  values?: Array<ContributorProfileInput | null>,
) =>
  (values ?? [])
    .map((value) => resolveContributorProfile(value?.profileUrl))
    .filter((contributor): contributor is ResolvedContributorProfile =>
      Boolean(contributor),
    );

export const isSupportedContributorProfileUrl = (value?: string | null) =>
  Boolean(resolveContributorProfile(value));
