import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { getMatchingPrograms, getRandomProgram } from "@/shared/lib/training-utils";
import { trainingPrograms, TrainingProgram } from "@/shared/api/trainingPrograms";

interface UseTrainingResultProps {
  equipment: string[];
  workoutType: string;
  random?: string;
  exclude?: string;
  programId?: string;
}

export function useTrainingResult({ equipment, workoutType, random, exclude, programId }: UseTrainingResultProps) {
  const router = useRouter();

  const programs = useMemo(() => {
    return equipment.length && workoutType
      ? getMatchingPrograms(equipment, workoutType)
      : [];
  }, [equipment, workoutType]);

  const [isClient, setIsClient] = useState(false);
  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  // Если есть programId — ищем по нему
  const resultProgram = useMemo(() => {
    if (programId) {
      return trainingPrograms.training_programs.find(p => p.id === programId);
    }
    // Старая логика поиска
    const programs = trainingPrograms.training_programs.filter(
      p => p.workout_type === workoutType &&
        equipment.length === p.equipment.length &&
        equipment.every(eq => p.equipment.includes(eq))
    );
    if (exclude) {
      return programs.find(p => p.id !== exclude) || programs[0];
    }
    return programs[0];
  }, [equipment, workoutType, exclude, programId]);

  const showAnother = programs.length > 1 && !!resultProgram && isClient;

  const handleAnother = () => {
    if (!resultProgram) return;

    // Получаем все подходящие программы
    const matchingPrograms = trainingPrograms.training_programs.filter(
      (p: TrainingProgram) => p.workout_type === workoutType &&
        equipment.length === p.equipment.length &&
        equipment.every(eq => p.equipment.includes(eq)) &&
        p.id !== resultProgram.id
    );

    // Если нет других программ, остаёмся на текущей
    if (matchingPrograms.length === 0) return;

    // Выбираем случайную из оставшихся
    const randomIndex = Math.floor(Math.random() * matchingPrograms.length);
    const randomProgram = matchingPrograms[randomIndex];

    const params = new URLSearchParams({
      equipment: equipment.join(","),
      workoutType: workoutType || "",
      random: "1",
      exclude: resultProgram.id
    });
    // Добавляем id новой программы в параметры (например, programId)
    params.set("programId", randomProgram.id);
    router.push(`/result?${params.toString()}`);
  };

  return {
    program: resultProgram,
    showAnother,
    handleAnother,
    hasProgram: !!resultProgram
  };
}