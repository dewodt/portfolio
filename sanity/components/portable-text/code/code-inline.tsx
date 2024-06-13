import Refractor from "react-refractor";

export interface CodeInlineProps {
  code: string;
  language: string;
}

export const CodeInline = (props: CodeInlineProps) => {
  const { code, language } = props;
  if (!code || !language) return <></>;
  return <Refractor language={language} value={code} />;
};
