import type { Exercise } from "@/shared/api/trainingPrograms";
import { ExerciseTitle } from "@/shared/ui/ExerciseTitle";

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

export function ExerciseCard({ exercise, index }: ExerciseCardProps) {
  return (
    <li className="border-b pb-1">
      <ExerciseTitle index={index}>{exercise.name}</ExerciseTitle>
      <div className="text-xs text-gray-600">Мышцы: {exercise.muscles}</div>
      <div className="text-xs">Подходы: {exercise.sets}, Повторения: {exercise.reps}</div>
      <div className="text-xs mt-1">{exercise.description}</div>
    </li>
  );
}