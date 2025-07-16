import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded shadow-md p-6 w-full max-w-md ${className}`}>
      {children}
    </div>
  );
}