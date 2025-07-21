import { TrainingResult } from "@/widgets/training-result/TrainingResult";
import { notFound } from "next/navigation";
import { VStack } from "@chakra-ui/react";
import { parseSearchParams, SearchParams } from "@/shared/lib/parse-search-params";
import { getMatchingPrograms, getResultProgram } from "@/shared/lib/training-utils";
import { ShowAnotherButton } from "@/widgets/training-result/ShowAnotherButton";

export default function ResultPage({ searchParams }: { searchParams: SearchParams }) {
  const { equipment, workoutType, exclude, programId } = parseSearchParams(searchParams);
  const program = getResultProgram(equipment, workoutType, exclude, programId);
  const matchingPrograms = getMatchingPrograms(equipment, workoutType);
  const showAnother = matchingPrograms.length > 1 && !!program;

  if (!program) {
    notFound();
  }

  return (
    <VStack as="main" minH="100vh" justify="center" align="center" p={4} bg="gray.50" gap={6}>
      {showAnother && (
        <ShowAnotherButton
          equipment={equipment}
          workoutType={workoutType}
          exclude={program.id}
        />
      )}
      <TrainingResult program={program} />
    </VStack>
  );
}