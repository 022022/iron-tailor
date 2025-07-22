import { Box } from "@chakra-ui/react";

interface EquipmentCardProps {
  equipment: string;
  isSelected: boolean;
  onClick: () => void;
}

export function EquipmentCard({ equipment, isSelected, onClick }: EquipmentCardProps) {
  return (
    <Box
      borderWidth={2}
      borderColor={isSelected ? "purple.500" : "purple.100"}
      cursor="pointer"
      onClick={onClick}
      bg={isSelected ? "purple.500" : "white"}
      _hover={isSelected ? {  backgroundColor: "purple.400" } : { backgroundColor: "purple.100" }}
      rounded="md"
      p={4}
      display='grid'
      placeItems='center'
      textAlign='center'
      fontSize="md"
      transition="all 0.2s"
      color={isSelected ? "white" : "purple.950"}
      lineHeight='1.2'
    >
      {equipment}
    </Box>
  );
}