import { Box, VStack } from "@chakra-ui/react";
import type { TrainingProgram } from "@/shared/api/trainingPrograms";
import { TrainingHeader } from "./ui/TrainingHeader";
import { ExerciseList } from "./ui/ExerciseList";

interface TrainingResultProps {
  program: TrainingProgram;
}

export function TrainingResult({ program }: TrainingResultProps) {
  return (
    <Box   w="full" maxW="lg" color="purple.50" >
      <VStack align="stretch" gap={6}>
        <TrainingHeader program={program} />
        <ExerciseList program={program} />
      </VStack>
    </Box>
  );
}