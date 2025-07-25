import { HStack, Badge } from '@chakra-ui/react';
import type { TrainingProgram } from '@/shared/api/trainingPrograms';

interface TrainingHeaderProps {
	program: TrainingProgram;
}

export function TrainingHeader({ program }: TrainingHeaderProps) {
	return (
		<>
			<HStack justify='center' gap={2} flexWrap='wrap'>
      {program.equipment.map((eq) => (
					<Badge
						key={eq}
						variant='solid'
						backgroundColor='brand.purple.500'
						fontSize='md'
            p={1}
						borderRadius='md'
            fontWeight='medium'
					>
						{eq}
					</Badge>
				))}
				<Badge
					variant='solid'
					backgroundColor='orange.500'
          fontSize='md'
          p={1}
					borderRadius='md'
          fontWeight='medium'
				>
					{program.workout_type}
				</Badge>

			</HStack>

		</>
	);
}
