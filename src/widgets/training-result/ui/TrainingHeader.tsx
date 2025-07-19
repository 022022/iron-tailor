import { Heading, HStack, Badge } from "@chakra-ui/react";
import type { TrainingProgram } from "@/shared/api/trainingPrograms";

interface TrainingHeaderProps {
  program: TrainingProgram;
}

export function TrainingHeader({ program }: TrainingHeaderProps) {
  return (
    <>
      <Heading as="h2" size="lg" textAlign="center" mb={2}>
        {program.workout_type}
      </Heading>
      <HStack justify="center" mb={2} gap={2}>
        {program.equipment.map(eq => (
          <Badge key={eq} colorScheme="blue" fontSize="md" px={3} py={1} borderRadius="md">
            {eq}
          </Badge>
        ))}
      </HStack>
    </>
  );
}