import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { PortableTextBlock } from "@portabletext/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFormattedDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

type PortableTextContent = Array<
  PortableTextBlock | { _type: string; [key: string]: any }
>;

export function portableTextToPlainText(blocks: PortableTextContent): string {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (
          block._type !== "block" ||
          !("children" in block) ||
          !block.children
        ) {
          return "";
        }

        // Ignore latex and code blocks
        const text = block.children
          .map((child: any) => {
            if (child._type === "span") {
              return child.text;
            } else {
              return "";
            }
          })
          .join(" "); // join the text with a space

        return text;
      })
      .join("\n\n") // join the paragraphs leaving split by two linebreaks
  );
}
