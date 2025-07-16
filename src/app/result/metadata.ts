import { trainingPrograms } from "@/shared/api/trainingPrograms";
import type { Metadata } from "next";
import type { TrainingProgram } from "@/shared/api/trainingPrograms";

function getProgram(equipment: string, workoutType: string): TrainingProgram | undefined {
  return trainingPrograms.training_programs.find(
    (p) => p.equipment === equipment && p.workout_type === workoutType
  );
}

export async function generateMetadata({ searchParams }: { searchParams: { equipment?: string; workoutType?: string } }): Promise<Metadata> {
  const { equipment, workoutType } = searchParams;
  const program = equipment && workoutType ? getProgram(equipment, workoutType) : undefined;
  if (!program) {
    return {
      title: "Тренировка не найдена",
      description: "Проверьте выбранные параметры тренировки."
    };
  }
  return {
    title: `Тренировка: ${program.workout_type} (${program.equipment})`,
    description: `Программа: ${program.workout_type} с использованием ${program.equipment}. Упражнения: ${program.exercises.map(e => e.name).join(", ")}`
  };
}