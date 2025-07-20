"use client";

import { Box, VStack } from "@chakra-ui/react";
import type { TrainingProgram } from "@/shared/api/trainingPrograms";
import { TrainingHeader } from "./ui/TrainingHeader";
import { ExerciseList } from "./ui/ExerciseList";

interface TrainingResultProps {
  program: TrainingProgram;
}

export function TrainingResult({ program }: TrainingResultProps) {
  return (
    <Box bg="white" p={8} rounded="md" shadow="md" w="full" maxW="lg">
      <VStack align="stretch" gap={6}>
        <TrainingHeader program={program} />
        <ExerciseList program={program} />
      </VStack>
    </Box>
  );
}