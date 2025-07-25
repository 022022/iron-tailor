import { Box, VStack, Heading, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <VStack as="main" minH="100vh" justify="center" align="center" p={4} bg="gray.50">
      <Box bg="brand.white" p={8} rounded="md" shadow="md" w="full" maxW="md" textAlign="center">
        <Heading as="h2" size="lg" mb={4}>Тренировка не найдена</Heading>
        <Text>Проверьте выбранные параметры.</Text>
      </Box>
    </VStack>
  );
}