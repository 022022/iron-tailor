import { TrainingResult } from "@/widgets/training-result/TrainingResult";
import { notFound } from "next/navigation";
import { VStack } from "@chakra-ui/react";
import { parseSearchParams, SearchParams } from "@/shared/lib/parse-search-params";
import { getResultProgram } from "@/shared/lib/training-utils";
import { TrainingNavHeader } from '@/widgets/training-result/ui/TrainingNavHeader';

export default function ResultPage({ searchParams }: { searchParams: SearchParams }) {
  const { equipment, workoutType, currentId, programId } = parseSearchParams(searchParams);
  const program = getResultProgram(equipment, workoutType, currentId, programId);

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