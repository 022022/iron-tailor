import { SimpleGrid } from "@chakra-ui/react";
import { EquipmentCard } from "./EquipmentCard";

interface EquipmentSelectorProps {
  equipmentOptions: string[];
  selectedEquipment: string[];
  onEquipmentSelect: (equipment: string) => void;
}

export function EquipmentSelector({ equipmentOptions, selectedEquipment, onEquipmentSelect }: EquipmentSelectorProps) {
  return (
    <SimpleGrid columns={4} gap={4} mb={4}>
      {equipmentOptions.map(equipment => (
        <EquipmentCard
          key={equipment}
          equipment={equipment}
          isSelected={selectedEquipment.includes(equipment)}
          onClick={() => onEquipmentSelect(equipment)}
        />
      ))}
    </SimpleGrid>
  );
}