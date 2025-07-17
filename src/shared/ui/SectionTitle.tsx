import type { SectionTitleProps } from "./SectionTitle.types";

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`text-2xl font-bold mb-4 text-center ${className}`}>{children}</h2>
  );
}