import type { TrainingProgram } from "@/shared/api/trainingPrograms";
import { TrainingProgramCard } from "@/entities/training-program/TrainingProgramCard";
import { SectionTitle } from "@/shared/ui/SectionTitle";

interface TrainingResultProps {
  program: TrainingProgram;
}

export function TrainingResult({ program }: TrainingResultProps) {
  return (
    <section className="w-full flex flex-col items-center">
      <SectionTitle>Ваша тренировка</SectionTitle>
      <TrainingProgramCard program={program} />
    </section>
  );
}