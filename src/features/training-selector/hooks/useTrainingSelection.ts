import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { equipmentAtom, workoutTypeAtom } from "@/features/training-selector/model/atoms";
import { trainingPrograms } from "@/shared/api/trainingPrograms";

export function useTrainingSelection() {
  const [equipment, setEquipment] = useAtom(equipmentAtom);
  const [workoutType, setWorkoutType] = useAtom(workoutTypeAtom);
  const router = useRouter();
  const pendingNavigation = useRef<string | null>(null);

    const handleEquipmentSelect = (value: string) => {
    let newEquipment: string[];

    if (equipment.includes(value)) {
      newEquipment = equipment.filter(eq => eq !== value);
    } else {
      // Убираем ограничение на 2 элемента - теперь можно выбирать любое количество
      newEquipment = [...equipment, value];
    }

    setEquipment(newEquipment);

    // Найти все доступные типы тренировок для этого оборудования
    const workoutTypeOptions = Array.from(
      new Set(trainingPrograms.training_programs.map(p => p.workout_type))
    );

            const availableTypes = workoutTypeOptions.filter(type => {
      return trainingPrograms.training_programs.some(p => {
        // Тип тренировки должен совпадать
        if (p.workout_type !== type) return false;

        // Количество оборудования должно совпадать
        if (p.equipment.length !== newEquipment.length) return false;

        // Все выбранное оборудование должно быть в программе
        return newEquipment.every(eq => p.equipment.includes(eq));
      });
    });

    // Если выбранный тип тренировки не входит в доступные — сбросить
    if (newEquipment.length > 0 && !availableTypes.includes(workoutType)) {
      setWorkoutType(availableTypes[0] || "");
    } else if (newEquipment.length === 0) {
      // Если оборудование не выбрано, сбрасываем тип тренировки
      setWorkoutType("");
    }
  };

  const handleWorkoutTypeSelect = (value: string, disabled: boolean) => {
    if (disabled || equipment.length === 0) return;
    setWorkoutType(value);
    pendingNavigation.current = `/result?equipment=${encodeURIComponent(equipment.join(","))}&workoutType=${encodeURIComponent(value)}&random=1`;
  };

  useEffect(() => {
    if (pendingNavigation.current) {
      router.push(pendingNavigation.current);
      pendingNavigation.current = null;
    }
  }, [workoutType, router]);

  return {
    equipment,
    workoutType,
    handleEquipmentSelect,
    handleWorkoutTypeSelect,
  };
}