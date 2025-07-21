"use client";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { viewedProgramIdsAtom } from "@/features/training-selector/model/atoms";
import { getMatchingPrograms, getNextProgramId } from "@/shared/lib/training-utils";

interface ShowAnotherButtonProps {
  equipment: string[];
  workoutType: string;
  currentId: string; // текущий programId
}

export function ShowAnotherButton({ equipment, workoutType, currentId }: ShowAnotherButtonProps) {
  const router = useRouter();
  const [viewedIds, setViewedIds] = useAtom(viewedProgramIdsAtom);

  const programs = getMatchingPrograms(equipment, workoutType);

  const handleAnother = () => {
    const newViewed = viewedIds.includes(currentId)
      ? viewedIds
      : [...viewedIds, currentId];
    setViewedIds(newViewed);

    const nextId = getNextProgramId(programs, currentId, newViewed);
    const params = new URLSearchParams({
      equipment: equipment.join(","),
      workoutType: workoutType || "",
      programId: nextId
    });
    router.push(`/result?${params.toString()}`);
  };

  return (
    <Button colorScheme="blue" onClick={handleAnother}>
      Показать другую тренировку
    </Button>
  );
}