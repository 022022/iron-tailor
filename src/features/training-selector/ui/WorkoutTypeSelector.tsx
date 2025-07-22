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
    <SimpleGrid columns={2} columnGap="2" rowGap="2" width="100%">
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