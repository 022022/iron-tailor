import { VStack } from "@chakra-ui/react";
import { ExerciseCard } from "./ExerciseCard";
import type { TrainingProgram } from "@/shared/api/trainingPrograms";

interface ExerciseListProps {
  program: TrainingProgram;
}

export function ExerciseList({ program }: ExerciseListProps) {
  return (
    <VStack as="ul" gap={6} style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {program.exercises.map((exercise, index) => (
        <ExerciseCard key={exercise.name} exercise={exercise} index={index} />
      ))}
    </VStack>
  );
}