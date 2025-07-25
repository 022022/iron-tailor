import { Box, Text, HStack, Badge, Heading, VStack } from '@chakra-ui/react';
import type { Exercise } from '@/shared/api/trainingPrograms';

interface ExerciseCardProps {
	exercise: Exercise;
	index: number;
}

export function ExerciseCard({ exercise, index }: ExerciseCardProps) {
	return (
		<VStack
			w='full'
			gap={4}
			align='start'
			borderBottom='1px solid'
			borderColor='gray.300'
			pb={4}
		>
			<Heading as='h3' size='md' color='orange.500' fontWeight='normal'>
				{index + 1}. {exercise.name}
			</Heading>

			<Badge fontSize='sm' pb={1} w='fit-content'>
				{exercise.muscles}
			</Badge>
			<Text color='brand.purple.50' fontSize='md'>
				{exercise.description}
			</Text>

			<HStack gap={4} mb={1}>
				<Text color='brand.purple.500' fontSize='md'>
					Подходы: {exercise.sets}
				</Text>
				<Text color='brand.purple.500' fontSize='md'>
					Повторы: {exercise.reps}
				</Text>
			</HStack>
		</VStack>
	);
}
