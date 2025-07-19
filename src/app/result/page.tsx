"use client";

import { TrainingResult } from "@/widgets/training-result/TrainingResult";
import type { ResultPageProps } from "./types";
import { notFound } from "next/navigation";
import { Button, VStack } from "@chakra-ui/react";
import { useTrainingResult } from "@/widgets/training-result/hooks/useTrainingResult";

export default function ResultPage({ searchParams }: ResultPageProps) {
  const { equipment, workoutType, random, exclude } = searchParams;

  const equipmentArr = equipment ? equipment.split(",") : [];
  const { program, showAnother, handleAnother, hasProgram } = useTrainingResult({
    equipment: equipmentArr,
    workoutType: workoutType || "",
    random: random || "",
    exclude
  });

  if (!hasProgram) {
    notFound();
  }

  return (
    <VStack as="main" minH="100vh" justify="center" align="center" p={4} bg="gray.50" gap={6}>
      {showAnother && (
        <Button colorScheme="blue" onClick={handleAnother}>
          Показать другую тренировку
        </Button>
      )}
      <TrainingResult program={program!} />
    </VStack>
  );
}