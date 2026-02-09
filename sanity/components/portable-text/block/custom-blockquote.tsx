export const CustomBlockquote = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <blockquote
      style={{
        borderLeft: "2px solid rgba(59, 130, 246, 0.6)",
        paddingLeft: "1.25rem",
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
        fontSize: "1rem",
        color: "#94a3b8",
        fontStyle: "italic",
      }}
    >
      {children}
    </blockquote>
  );
};
