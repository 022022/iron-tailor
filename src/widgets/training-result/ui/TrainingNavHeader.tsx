import { Grid, Heading } from '@chakra-ui/react';
import type { TrainingProgram } from '@/shared/api/trainingPrograms';
import { ShowAnotherButton } from '@/widgets/training-result/ShowAnotherButton';
import { getMatchingPrograms } from '@/shared/lib/training-utils';
import { HomeButton } from '@/widgets/training-result/HomeButton';

interface TrainingHeaderProps {
	program: TrainingProgram;
}

export function TrainingNavHeader({ program }: TrainingHeaderProps) {
	const { equipment, workout_type } = program;
	const matchingPrograms = getMatchingPrograms(equipment, workout_type);
	const showAnother = matchingPrograms.length > 1 && !!program;
	return (
		<Grid templateColumns='48px auto 48px' gap='6' w='100%' alignItems='center'>
			<HomeButton />
			<Heading
				as='h2'
				size='md'
				textAlign='center'
				color='purple.50'
			>
				Тренировка
			</Heading>
			{showAnother && (
				<ShowAnotherButton
					equipment={equipment}
					workoutType={workout_type}
					currentId={program.id}
				/>
			)}
		</Grid>
	);
}
