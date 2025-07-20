import { atom, PrimitiveAtom } from "jotai";

const equipmentDefault: string[] = [];
const workoutTypeDefault = ""; // По умолчанию не выбран ни один тип тренировки

export const equipmentAtom = atom<string[]>(equipmentDefault);
export const workoutTypeAtom = atom<string>(workoutTypeDefault);

export const resetTrainingSelectionAtoms = (
  set: (atom: PrimitiveAtom<string[]> | PrimitiveAtom<string>, value: string[] | string) => void
) => {
  set(equipmentAtom, equipmentDefault);
  set(workoutTypeAtom, workoutTypeDefault);
};