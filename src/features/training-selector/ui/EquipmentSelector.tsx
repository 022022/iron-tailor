import { SimpleGrid } from "@chakra-ui/react";
import { EquipmentCard } from "./EquipmentCard";

interface EquipmentSelectorProps {
  equipmentOptions: string[];
  selectedEquipment: string[];
  onEquipmentSelect: (equipment: string) => void;
}

export function EquipmentSelector({ equipmentOptions, selectedEquipment, onEquipmentSelect }: EquipmentSelectorProps) {
  return (
    <SimpleGrid columns={2} columnGap="2" rowGap="2" width="100%" >
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