"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/Button";
import { Select } from "@/shared/ui/Select";
import { useTrainingOptions } from "@/features/training-selector/hooks/useTrainingOptions";

export function TrainingSelector() {
  const { equipmentOptions, workoutTypeOptions } = useTrainingOptions();
  const [equipment, setEquipment] = useState(equipmentOptions[0] || "");
  const [workoutType, setWorkoutType] = useState(workoutTypeOptions[0] || "");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/result?equipment=${encodeURIComponent(equipment)}&workoutType=${encodeURIComponent(workoutType)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Выбор тренировки</h1>
      <Select
        label="Оборудование"
        options={equipmentOptions}
        value={equipment}
        onChange={e => setEquipment(e.target.value)}
      />
      <Select
        label="Тип тренировки"
        options={workoutTypeOptions}
        value={workoutType}
        onChange={e => setWorkoutType(e.target.value)}
      />
      <Button type="submit">Показать тренировку</Button>
    </form>
  );
}