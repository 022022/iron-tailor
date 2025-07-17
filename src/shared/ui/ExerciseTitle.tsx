import type { ExerciseTitleProps } from "./ExerciseTitle.types";

export function ExerciseTitle({ index, children }: ExerciseTitleProps) {
  return (
    <div className="font-semibold">
      {index + 1}. {children}
    </div>
  );
}