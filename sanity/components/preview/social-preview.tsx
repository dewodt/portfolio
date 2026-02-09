import { useColorSchemeValue } from "sanity";
import type { PreviewProps } from "sanity";

export function SocialPreview(
  props: PreviewProps & { iconLight?: any; iconDark?: any },
) {
  const scheme = useColorSchemeValue();
  const media = scheme === "dark" ? props.iconDark : props.iconLight;

  return props.renderDefault({ ...props, media });
}
