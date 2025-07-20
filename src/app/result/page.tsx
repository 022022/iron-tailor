"use client";

import { TrainingResult } from "@/widgets/training-result/TrainingResult";
import type { ResultPageProps } from "./types";
import { notFound } from "next/navigation";
import { Button, VStack } from "@chakra-ui/react";
import { useTrainingResult } from "@/widgets/training-result/hooks/useTrainingResult";
import { use } from "react";

interface SearchParams {
  equipment?: string;
  workoutType?: string;
  random?: string;
  exclude?: string;
  programId?: string;
}

function parseSearchParams(params: SearchParams) {
  const equipment = params.equipment ? params.equipment.split(",") : [];
  return {
    equipment,
    workoutType: params.workoutType || "",
    random: params.random || "",
    exclude: params.exclude,
    programId: params.programId,
  };
}

export default function ResultPage({ searchParams }: { searchParams: SearchParams }) {
  const params = use(searchParams) as SearchParams;
  const { equipment, workoutType, random, exclude, programId } = parseSearchParams(params);

  const { program, showAnother, handleAnother, hasProgram } = useTrainingResult({
    equipment,
    workoutType,
    random,
    exclude,
    programId
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