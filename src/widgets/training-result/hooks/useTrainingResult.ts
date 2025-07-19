import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { getMatchingPrograms, getRandomProgram } from "@/shared/lib/training-utils";
import type { TrainingProgram } from "@/shared/api/trainingPrograms";

interface UseTrainingResultProps {
  equipment: string[];
  workoutType: string;
  random: string;
  exclude?: string;
}

export function useTrainingResult({ equipment, workoutType, random, exclude }: UseTrainingResultProps) {
  const router = useRouter();
  const [randomProgram, setRandomProgram] = useState<TrainingProgram | undefined>(undefined);

  const programs = useMemo(() => {
    return equipment.length && workoutType
      ? getMatchingPrograms(equipment, workoutType)
      : [];
  }, [equipment, workoutType]);

  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  let program: TrainingProgram | undefined = programs[0];

  useEffect(() => {
    if (random === "1" && programs.length > 0) {
      setRandomProgram(getRandomProgram(programs, exclude));
    } else {
      setRandomProgram(undefined);
    }
  }, [programs, random, exclude]);

  if (random === "1" && programs.length > 0 && isClient) {
    program = randomProgram || programs[0];
  }

  const showAnother = programs.length > 1 && !!program && isClient;

  const handleAnother = () => {
    if (!program) return;

    const params = new URLSearchParams({
      equipment: equipment.join(","),
      workoutType: workoutType || "",
      random: "1",
      exclude: program.exercises[0].name
    });
    router.push(`/result?${params.toString()}`);
  };

  return {
    program,
    showAnother,
    handleAnother,
    hasProgram: !!program
  };
}