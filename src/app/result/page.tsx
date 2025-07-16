import { trainingPrograms } from "@/shared/api/trainingPrograms";
import type { TrainingProgram } from "@/shared/api/trainingPrograms";
import { TrainingResult } from "@/widgets/training-result/TrainingResult";

function getProgram(equipment: string, workoutType: string): TrainingProgram | undefined {
  return trainingPrograms.training_programs.find(
    (p) => p.equipment === equipment && p.workout_type === workoutType
  );
}

export default function ResultPage({ searchParams }: { searchParams: { equipment?: string; workoutType?: string } }) {
  const { equipment, workoutType } = searchParams;
  const program: TrainingProgram | undefined = equipment && workoutType ? getProgram(equipment, workoutType) : undefined;

  if (!program) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
          <h2 className="text-xl font-bold mb-4">Тренировка не найдена</h2>
          <p>Проверьте выбранные параметры.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <TrainingResult program={program} />
    </main>
  );
}