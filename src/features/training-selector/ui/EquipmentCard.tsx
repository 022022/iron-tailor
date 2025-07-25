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
      borderColor={isSelected ? "brand.purple.500" : "brand.purple.100"}
      cursor="pointer"
      onClick={onClick}
      bg={isSelected ? "brand.purple.500" : "brand.white"}
      _hover={isSelected ? {  backgroundColor: "brand.purple.400" } : { backgroundColor: "brand.purple.100" }}
      rounded="md"
      p={4}
      display='grid'
      placeItems='center'
      textAlign='center'
      fontSize="md"
      transition="all 0.2s"
      color={isSelected ? "brand.white" : "brand.purple.950"}
      lineHeight='1.2'
    >
      {equipment}
    </Box>
  );
}