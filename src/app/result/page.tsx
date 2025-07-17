import { TrainingResult } from "@/widgets/training-result/TrainingResult";
import { generateMetadata } from "./metadata";
import type { ResultPageProps } from "./types";
import { notFound } from "next/navigation";
import { useFindTrainingProgram } from "@/entities/training-program/hooks/useFindTrainingProgram";

export { generateMetadata };

export default function ResultPage({ searchParams }: ResultPageProps) {
  const { equipment, workoutType } = searchParams;
  const findProgram = useFindTrainingProgram();
  const program = findProgram(equipment, workoutType);

  if (!program) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <TrainingResult program={program} />
    </main>
  );
}