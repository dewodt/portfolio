import { Highlight, themes } from "prism-react-renderer";

export interface CodeInlineProps {
  code: string;
  language: string;
}

export const CodeInline = (props: CodeInlineProps) => {
  const { code, language } = props;

  if (!code || !language) return <></>;

  return (
    <Highlight language={language} code={code} theme={themes.oneDark}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
