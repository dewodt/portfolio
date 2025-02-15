import { QuoteIcon } from "../../icon/quote-icon";

export const CustomBlockquote = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <blockquote className="border-l-primary bg-card rounded-r-md border-l-4 p-4 text-base font-medium text-white italic lg:text-lg">
      <QuoteIcon className="fill-primary mb-2 size-6 stroke-0 lg:size-7" />
      {children}
    </blockquote>
  );
};
