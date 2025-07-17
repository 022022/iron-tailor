import { trainingPrograms } from "@/shared/api/trainingPrograms";
import type { TrainingProgram } from "@/shared/api/trainingPrograms";

export function useFindTrainingProgram() {
  return (equipment?: string, workoutType?: string): TrainingProgram | undefined => {
    if (!equipment || !workoutType) return undefined;
    return trainingPrograms.training_programs.find(
      (p) => p.equipment === equipment && p.workout_type === workoutType
    );
  };
}