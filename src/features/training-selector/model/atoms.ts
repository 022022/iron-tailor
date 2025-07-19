import { atom } from "jotai";
import { trainingPrograms } from "@/shared/api/trainingPrograms";

const equipmentDefault: string[] = trainingPrograms.training_programs[0]?.equipment || [];
const workoutTypeDefault = trainingPrograms.training_programs[0]?.workout_type || "";

export const equipmentAtom = atom<string[]>(equipmentDefault);
export const workoutTypeAtom = atom<string>(workoutTypeDefault);