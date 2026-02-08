import { useColorSchemeValue } from "sanity";
import type { PreviewProps } from "sanity";

export function SkillPreview(
  props: PreviewProps & { logoLight?: any; logoDark?: any },
) {
  const scheme = useColorSchemeValue();
  const media = scheme === "dark" ? props.logoDark : props.logoLight;

  return props.renderDefault({ ...props, media });
}
