import type { TrainingProgramCardProps } from "./types";
import { ExerciseCard } from "@/entities/exercise/ExerciseCard";
import { Card } from "@/shared/ui/Card/Card";

export function TrainingProgramCard({ program }: TrainingProgramCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-bold mb-2">{program.workout_type}</h3>
      <div className="mb-2 text-sm text-gray-700">
        <span className="font-medium">Оборудование:</span> {program.equipment}
      </div>
      <ol className="space-y-2">
        {program.exercises.map((ex, idx) => (
          <ExerciseCard key={ex.name} exercise={ex} index={idx} />
        ))}
      </ol>
    </Card>
  );
}