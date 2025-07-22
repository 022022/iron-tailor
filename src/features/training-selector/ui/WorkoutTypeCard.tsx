import { Box } from "@chakra-ui/react";

interface WorkoutTypeCardProps {
  label: string;
  isSelected: boolean;
  disabled: boolean;
  onClick: () => void;
}

export function WorkoutTypeCard({ label, disabled, onClick }: WorkoutTypeCardProps) {
  return (
    <Box
      cursor={disabled ? "not-allowed" : "pointer"}
      bg={disabled ? "gray.300" : "white"}
      borderWidth={2}
      onClick={onClick}
      _hover={disabled ? {} : {backgroundColor: "orange.500", color: "white"}}
      borderColor={disabled ? "gray.300" : "orange.500"}
      rounded="md"
      p={4}
      textAlign="center"
      fontSize="md"
      transition="all 0.2s"
    >
      {label}
    </Box>
  );
}