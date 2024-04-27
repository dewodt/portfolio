import { QuoteIcon } from "../../icon/quote-icon";

export const CustomBlockquote = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <blockquote className="rounded-r-md border-l-4 border-l-primary bg-card p-4 text-base font-medium italic text-white lg:text-lg">
      <QuoteIcon className="mb-2 size-6 fill-primary stroke-0 lg:size-7" />
      {children}
    </blockquote>
  );
};
