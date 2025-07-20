"use client";

import { Box } from "@chakra-ui/react";

interface WorkoutTypeCardProps {
  label: string;
  isSelected: boolean;
  disabled: boolean;
  onClick: () => void;
}

export function WorkoutTypeCard({ label, isSelected, disabled, onClick }: WorkoutTypeCardProps) {
  return (
    <Box
      borderWidth={1}
      borderColor="gray.200"
      cursor={disabled ? "not-allowed" : "pointer"}
      opacity={disabled ? 0.5 : 1}
      onClick={onClick}
      bg={isSelected ? "blue.50" : "white"}
      _hover={disabled ? {} : { boxShadow: "md" }}
      rounded="md"
      p={4}
      textAlign="center"
      fontWeight={isSelected ? "bold" : "normal"}
      transition="all 0.2s"
    >
      {label}
    </Box>
  );
}