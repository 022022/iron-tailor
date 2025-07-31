import { HStack } from '@chakra-ui/react';
import type { TrainingProgram } from '@/shared/api/trainingPrograms';
import { Badge } from '@/shared/ui/Badge';

interface TrainingHeaderProps {
	program: TrainingProgram;
}

export function TrainingHeader({ program }: TrainingHeaderProps) {
	return (
		<>
			<HStack justify='center' gap={2} flexWrap='wrap'>
      {program.equipment.map((eq) => (
					<Badge key={eq} variant="equipment">
						{eq}
					</Badge>
				))}
				<Badge variant="type">
					{program.workout_type}
				</Badge>
			</HStack>
		</>
	);
}
