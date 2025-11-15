import { QuoteIcon } from "../../icon/quote-icon";

export const CustomBlockquote = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <blockquote
      style={{
        borderLeft: "4px solid #0ea5e9",
        backgroundColor: "#1e293b",
        borderTopRightRadius: "6px",
        borderBottomRightRadius: "6px",
        padding: "1rem",
        fontSize: "1rem",
        fontWeight: 500,
        color: "#ffffff",
        fontStyle: "italic",
      }}
    >
      <QuoteIcon
        style={{
          fill: "#0ea5e9",
          marginBottom: "0.5rem",
          width: "1.5rem",
          height: "1.5rem",
          stroke: "none",
        }}
      />
      {children}
    </blockquote>
  );
};
