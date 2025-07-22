import { HStack, Badge } from '@chakra-ui/react';
import type { TrainingProgram } from '@/shared/api/trainingPrograms';

interface TrainingHeaderProps {
	program: TrainingProgram;
}

export function TrainingHeader({ program }: TrainingHeaderProps) {
	return (
		<>
			<HStack justify='center' mb={3} gap={2} flexWrap='wrap'>
      {program.equipment.map((eq) => (
					<Badge
						key={eq}
						variant='solid'
						backgroundColor='purple.500'
						fontSize='sm'
            px={3}
            pt={1}
            pb={2}
						borderRadius='md'
					>
						{eq}
					</Badge>
				))}
				<Badge
					variant='solid'
					backgroundColor='orange.500'
          fontSize='sm'
          px={3}
          pt={1}
          pb={2}
					borderRadius='md'
				>
					{program.workout_type}
				</Badge>

			</HStack>

		</>
	);
}
