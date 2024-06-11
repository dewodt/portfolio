import { useMemo, useState } from "react";
import KaTeX from "katex";
import "katex/dist/katex.min.css";

export interface LatexPreviewProps {
  body: string;
  layout: string;
}

export const LatexPreview = (props: LatexPreviewProps) => {
  // Get the LaTeX content and layout
  const latex = props.body ?? "";
  const isInline = (props.layout ?? "block") === "inline" ? true : false;

  // Create the HTML from the LaTeX content
  const [html, setHtml] = useState<string>("");
  const createHtml = () => {
    setHtml(
      KaTeX.renderToString(latex, {
        displayMode: !isInline,
        throwOnError: false,
      }),
    );
  };

  // Update the HTML when the LaTeX content changes
  useMemo(createHtml, [latex, isInline]);

  return (
    <>
      {isInline ? (
        <span
          className="text-white"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <p className="text-white" dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </>
  );
};
