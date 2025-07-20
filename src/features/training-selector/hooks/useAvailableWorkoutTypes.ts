import { useMemo } from "react";
import { useAtom } from "jotai";
import { equipmentAtom } from "@/features/training-selector/model/atoms";
import { trainingPrograms } from "@/shared/api/trainingPrograms";

interface WorkoutTypeOption {
  label: string;
  value: string;
  disabled: boolean;
}

function getAvailableWorkoutTypes(equipment: string[]): WorkoutTypeOption[] {
  const workoutTypeOptions = Array.from(
    new Set(trainingPrograms.training_programs.map(p => p.workout_type))
  );

  if (equipment.length === 0) {
    return workoutTypeOptions.map(type => ({
      label: type,
      value: type,
      disabled: true
    }));
  }

  return workoutTypeOptions.map(type => {
    const hasCombo = trainingPrograms.training_programs.some(p => {
      if (p.workout_type !== type) return false;
      if (p.equipment.length !== equipment.length) return false;
      return equipment.every(eq => p.equipment.includes(eq));
    });
    return {
      label: type,
      value: type,
      disabled: !hasCombo,
    };
  });
}

export function useAvailableWorkoutTypes(): WorkoutTypeOption[] {
  const [equipment] = useAtom(equipmentAtom);
  return useMemo(() => getAvailableWorkoutTypes(equipment), [equipment]);
}