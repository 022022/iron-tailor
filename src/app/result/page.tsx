"use client";

import { TrainingResult } from "@/widgets/training-result/TrainingResult";
import { notFound } from "next/navigation";
import { Button, VStack } from "@chakra-ui/react";
import { useTrainingResult } from "@/widgets/training-result/hooks/useTrainingResult";
import { use } from "react";
import { parseSearchParams, SearchParams } from "@/shared/lib/parse-search-params";

export default function ResultPage({ searchParams }: { searchParams: SearchParams }) {
  const { equipment, workoutType, random, exclude, programId } = parseSearchParams(searchParams);

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