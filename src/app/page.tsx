import { metadata } from "./page.metadata";
import { TrainingSelector } from "@/features/training-selector/TrainingSelector";
import { Box } from "@chakra-ui/react";

export { metadata };

export default function Home() {
  return (
    <Box as="main" minH="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={4} bg="gray.50">
      <TrainingSelector />
    </Box>
  );
}
