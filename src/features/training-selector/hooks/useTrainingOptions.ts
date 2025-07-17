import { useMemo } from "react";
import { trainingPrograms } from "@/shared/api/trainingPrograms";

export function useTrainingOptions() {
  const equipmentOptions = useMemo(
    () => Array.from(new Set(trainingPrograms.training_programs.map(p => p.equipment))),
    []
  );
  const workoutTypeOptions = useMemo(
    () => Array.from(new Set(trainingPrograms.training_programs.map(p => p.workout_type))),
    []
  );
  return { equipmentOptions, workoutTypeOptions };
}