import { ReactNode } from "react";

interface ExerciseTitleProps {
  index: number;
  children: ReactNode;
}

export function ExerciseTitle({ index, children }: ExerciseTitleProps) {
  return (
    <div className="font-semibold">
      {index + 1}. {children}
    </div>
  );
}