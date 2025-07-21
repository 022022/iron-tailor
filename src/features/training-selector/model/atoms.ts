import { atom, PrimitiveAtom } from "jotai";

const equipmentDefault: string[] = [];
const workoutTypeDefault = "";

export const equipmentAtom = atom<string[]>([]);
export const workoutTypeAtom = atom<string>('');
export const viewedProgramIdsAtom = atom<string[]>([]);

export const resetTrainingSelectionAtoms = (
  set: (atom: PrimitiveAtom<string[]> | PrimitiveAtom<string>, value: string[] | string) => void
) => {
  set(equipmentAtom, equipmentDefault);
  set(workoutTypeAtom, workoutTypeDefault);
};