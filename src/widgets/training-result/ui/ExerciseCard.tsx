import { Box, Text, HStack, Badge } from "@chakra-ui/react";
import type { Exercise } from "@/shared/api/trainingPrograms";

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

export function ExerciseCard({ exercise, index }: ExerciseCardProps) {
  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      mb={2}
      _hover={{ boxShadow: "md" }}
    >
      <HStack justify="space-between" mb={1} gap={2}>
        <Text fontWeight="bold" fontSize="lg">
          {index + 1}. {exercise.name}
        </Text>
        <Badge colorScheme="purple" fontSize="sm">
          {exercise.muscles}
        </Badge>
      </HStack>
      <HStack gap={4} mb={1}>
        <Badge colorScheme="green">{exercise.sets} подходов</Badge>
        <Badge colorScheme="orange">{exercise.reps} повторов</Badge>
      </HStack>
      <Text color="gray.700" fontSize="md">
        {exercise.description}
      </Text>
    </Box>
  );
}