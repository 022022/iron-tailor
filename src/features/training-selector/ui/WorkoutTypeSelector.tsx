"use client";

import { SimpleGrid } from "@chakra-ui/react";
import { WorkoutTypeCard } from "./WorkoutTypeCard";

interface WorkoutTypeOption {
  label: string;
  value: string;
  disabled: boolean;
}

interface WorkoutTypeSelectorProps {
  workoutTypeOptions: WorkoutTypeOption[];
  selectedType: string;
  onWorkoutTypeSelect: (value: string, disabled: boolean) => void;
}

export function WorkoutTypeSelector({ workoutTypeOptions, selectedType, onWorkoutTypeSelect }: WorkoutTypeSelectorProps) {
  return (
    <SimpleGrid columns={4} gap={4}>
      {workoutTypeOptions.map(option => (
        <WorkoutTypeCard
          key={option.value}
          label={option.label}
          isSelected={selectedType === option.value}
          disabled={option.disabled}
          onClick={() => onWorkoutTypeSelect(option.value, option.disabled)}
        />
      ))}
    </SimpleGrid>
  );
}