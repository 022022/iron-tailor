import { trainingPrograms } from "@/shared/api/trainingPrograms";
import type { TrainingProgram } from "@/shared/api/trainingPrograms";

export function getMatchingPrograms(equipment: string[], workoutType: string): TrainingProgram[] {
  return trainingPrograms.training_programs.filter(
    p => p.workout_type === workoutType &&
      equipment.length === p.equipment.length &&
      equipment.every(eq => p.equipment.includes(eq))
  );
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

export function getResultProgram(
  equipment: string[],
  workoutType: string,
  currentId?: string,
  programId?: string
): TrainingProgram | undefined {
  if (programId) {
    return trainingPrograms.training_programs.find(p => p.id === programId);
  }
  const programs = getMatchingPrograms(equipment, workoutType);
  if (currentId) {
    return programs.find(p => p.id !== currentId) || programs[0];
  }
  return programs[0];
}

export function getNextProgramId(
  programs: TrainingProgram[],
  currentId: string,
  viewedIds: string[]
): string {
  if (programs.length === 0) return '';

  const allViewed = programs.every(p => viewedIds.includes(p.id));
  const filtered = allViewed ? programs : programs.filter(p => !viewedIds.includes(p.id));

  const currentIndex = filtered.findIndex(p => p.id === currentId);

  const nextIndex = (currentIndex + 1) % filtered.length;
  return filtered[nextIndex].id;
}