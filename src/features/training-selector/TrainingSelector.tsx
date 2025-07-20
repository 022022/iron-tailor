"use client";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { getEquipmentOptions } from "@/shared/lib/training-utils";
import { useAvailableWorkoutTypes } from "./hooks/useAvailableWorkoutTypes";
import { useTrainingSelection } from "./hooks/useTrainingSelection";
import { EquipmentSelector } from "./ui/EquipmentSelector";
import { WorkoutTypeSelector } from "./ui/WorkoutTypeSelector";

export function TrainingSelector() {
  const equipmentOptions = getEquipmentOptions();
  const availableWorkoutTypes = useAvailableWorkoutTypes();
  const { equipment, workoutType, handleEquipmentSelect, handleWorkoutTypeSelect } = useTrainingSelection();

  return (
    <Box bg="white" p={8} rounded="md" shadow="md" w="full" maxW="md">
      <VStack align="stretch" gap={6}>
        <Heading as="h1" size="lg" textAlign="center">Выбор тренировки</Heading>

        <EquipmentSelector
          equipmentOptions={equipmentOptions}
          selectedEquipment={equipment}
          onEquipmentSelect={handleEquipmentSelect}
        />

        <WorkoutTypeSelector
          workoutTypeOptions={availableWorkoutTypes}
          selectedType={workoutType}
          onWorkoutTypeSelect={handleWorkoutTypeSelect}
        />
      </VStack>
    </Box>
  );
}