"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const equipmentOptions = [
  "гантели 20 кг",
  "фитнес-резинки",
  "штанга с блинами",
  "турник"
];
const workoutTypeOptions = [
  "силовая для ног",
  "силовая для рук",
  "функциональная для ног",
  "функциональная для рук"
];

export function TrainingSelector() {
  const [equipment, setEquipment] = useState(equipmentOptions[0]);
  const [workoutType, setWorkoutType] = useState(workoutTypeOptions[0]);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/result?equipment=${encodeURIComponent(equipment)}&workoutType=${encodeURIComponent(workoutType)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Выбор тренировки</h1>
      <div>
        <label className="block mb-2 font-medium">Оборудование</label>
        <select
          className="w-full border rounded p-2"
          value={equipment}
          onChange={e => setEquipment(e.target.value)}
        >
          {equipmentOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-2 font-medium">Тип тренировки</label>
        <select
          className="w-full border rounded p-2"
          value={workoutType}
          onChange={e => setWorkoutType(e.target.value)}
        >
          {workoutTypeOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Показать тренировку
      </button>
    </form>
  );
}