import { Box } from "@chakra-ui/react";

interface EquipmentCardProps {
  equipment: string;
  isSelected: boolean;
  onClick: () => void;
}

export function EquipmentCard({ equipment, isSelected, onClick }: EquipmentCardProps) {
  return (
    <Box
      borderWidth={isSelected ? 2 : 1}
      borderColor={isSelected ? "blue.500" : "gray.200"}
      cursor="pointer"
      onClick={onClick}
      bg={isSelected ? "blue.50" : "white"}
      _hover={{ boxShadow: "md" }}
      rounded="md"
      p={4}
      textAlign="center"
      fontWeight={isSelected ? "bold" : "normal"}
      transition="all 0.2s"
    >
      {equipment}
    </Box>
  );
}