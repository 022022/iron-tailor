import { trainingPrograms } from "@/data/trainingPrograms";

function getProgram(equipment: string, workoutType: string) {
  return trainingPrograms.training_programs.find(
    (p) => p.equipment === equipment && p.workout_type === workoutType
  );
}

export default function ResultPage({ searchParams }: { searchParams: { equipment?: string; workoutType?: string } }) {
  const { equipment, workoutType } = searchParams;
  const program = equipment && workoutType ? getProgram(equipment, workoutType) : null;

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
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Ваша тренировка</h2>
        <div className="mb-4">
          <span className="font-medium">Оборудование:</span> {program.equipment}<br />
          <span className="font-medium">Тип тренировки:</span> {program.workout_type}
        </div>
        <ol className="space-y-4">
          {program.exercises.map((ex, idx) => (
            <li key={ex.name} className="border-b pb-2">
              <div className="font-semibold">{idx + 1}. {ex.name}</div>
              <div className="text-sm text-gray-600">Мышцы: {ex.muscles}</div>
              <div className="text-sm">Подходы: {ex.sets}, Повторения: {ex.reps}</div>
              <div className="text-sm mt-1">{ex.description}</div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}