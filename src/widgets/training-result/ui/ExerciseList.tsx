import { VStack, Separator } from '@chakra-ui/react';
import { ExerciseCard } from './ExerciseCard';
import type { TrainingProgram } from '@/shared/api/trainingPrograms';
import UpIcon from '@/shared/lib/icons/UpIcon';

interface ExerciseListProps {
	program: TrainingProgram;
}

export function ExerciseList({ program }: ExerciseListProps) {
	return (
		<VStack
			as='ul'
			gap={6}
			style={{ listStyle: 'none', margin: 0, padding: 0 }}
		>
			{program.exercises.map((exercise, index) => (
				<VStack key={exercise.name} width='100%' gap={0}>
					<ExerciseCard
						exercise={exercise}
						index={index}
					/>
					{index < program.exercises.length - 1 && <Separator width="100%" borderColor="brand.purple.100" borderWidth="1px" marginBottom={0}/>}
				</VStack>
			))}

		</VStack>
	);
}
