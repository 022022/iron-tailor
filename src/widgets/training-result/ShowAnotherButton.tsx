"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface ShowAnotherButtonProps {
  equipment: string[];
  workoutType: string;
  exclude: string;
}

export function ShowAnotherButton({ equipment, workoutType, exclude }: ShowAnotherButtonProps) {
  const router = useRouter();

  const handleAnother = () => {
    const params = new URLSearchParams({
      equipment: equipment.join(","),
      workoutType: workoutType || "",
      random: "1",
      exclude: exclude
    });
    router.push(`/result?${params.toString()}`);
  };

  return (
    <Button colorScheme="blue" onClick={handleAnother}>
      Показать другую тренировку
    </Button>
  );
}