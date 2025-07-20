import { trainingPrograms } from "@/shared/api/trainingPrograms";
import type { TrainingProgram } from "@/shared/api/trainingPrograms";

export function filterProgramsByEquipmentAndType(equipment: string[], workoutType: string): TrainingProgram[] {
  return trainingPrograms.training_programs.filter(
    p => p.workout_type === workoutType &&
      equipment.length === p.equipment.length &&
      equipment.every(eq => p.equipment.includes(eq))
  );
}

export function getMatchingPrograms(equipment: string[], workoutType: string): TrainingProgram[] {
  return filterProgramsByEquipmentAndType(equipment, workoutType);
}

export function getEquipmentOptions(): string[] {
  const set = new Set<string>();
  trainingPrograms.training_programs.forEach(p => p.equipment.forEach(eq => set.add(eq)));
  return Array.from(set);
}

export function getWorkoutTypeOptions(): string[] {
  const set = new Set<string>();
  trainingPrograms.training_programs.forEach(p => set.add(p.workout_type));
  return Array.from(set);
}

export function getRandomProgram(programs: TrainingProgram[], excludeId?: string): TrainingProgram | undefined {
  if (programs.length === 0) return undefined;

  let filtered = programs;
  if (excludeId && programs.length > 1) {
    filtered = programs.filter(p => p.id !== excludeId);
  }

  // Если после фильтрации ничего не осталось, возвращаем случайную программу из исходного списка
  if (filtered.length === 0) {
    // На сервере всегда возвращаем первый элемент, на клиенте - случайный
    const index = typeof window !== 'undefined'
      ? Math.floor(Math.random() * programs.length)
      : 0;
    return programs[index];
  }

  // На сервере всегда возвращаем первый элемент, на клиенте - случайный
  const index = typeof window !== 'undefined'
    ? Math.floor(Math.random() * filtered.length)
    : 0;
  return filtered[index];
}