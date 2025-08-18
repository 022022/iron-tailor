import { TrainingResult } from "@/widgets/training-result/TrainingResult";
import { notFound } from "next/navigation";
import { VStack } from "@chakra-ui/react";
import { getResultProgram } from "@/shared/lib/training-utils";
import { TrainingNavHeader } from '@/widgets/training-result/ui/TrainingNavHeader';
import { ResultPageProps } from './types';

export default async function ResultPage({
  searchParams,
}: ResultPageProps) {
  const { equipment, workoutType, currentId, programId } = (await searchParams)

  const equipmentArr = equipment?.split(',')

  if (!equipmentArr || !workoutType) {
    notFound();
  }

  const program = getResultProgram(equipmentArr, workoutType, currentId, programId);

  if (!program) {
    notFound();
  }

  return (
    <VStack as="main" minH="100vh" justify="center" align="center" p={4} bg="brand.purple.950" gap={6}>
      <TrainingNavHeader program={program} />
      <TrainingResult program={program} />
    </VStack>
  );
}