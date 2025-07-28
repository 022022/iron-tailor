import { Box, VStack } from "@chakra-ui/react";
import type { TrainingProgram } from "@/shared/api/trainingPrograms";
import { TrainingHeader } from "./ui/TrainingHeader";
import { ExerciseList } from "./ui/ExerciseList";
import { ScrollToTopButton } from '@/shared/ui/ScrollToTopButton';

interface TrainingResultProps {
  program: TrainingProgram;
}

export function TrainingResult({ program }: TrainingResultProps) {
  return (
    <Box w="full" maxW="lg" color="brand.purple.50" >
      <VStack align="stretch" gap={8}>
        <TrainingHeader program={program} />
        <ExerciseList program={program} />
        <ScrollToTopButton />
      </VStack>
    </Box>
  );
}