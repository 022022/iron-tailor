'use client';
import { Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { getEquipmentOptions } from '@/shared/lib/training-utils';
import { useAvailableWorkoutTypes } from './hooks/useAvailableWorkoutTypes';
import { useTrainingSelection } from './hooks/useTrainingSelection';
import { EquipmentSelector } from './ui/EquipmentSelector';
import { WorkoutTypeSelector } from './ui/WorkoutTypeSelector';
import LogoIcon from '@/shared/lib/icons/LogoIcon';
import PlusIcon from '@/shared/lib/icons/PlusIcon';

export function TrainingSelector() {
	const equipmentOptions = getEquipmentOptions();
	const availableWorkoutTypes = useAvailableWorkoutTypes();
	const {
		equipment,
		workoutType,
		handleEquipmentSelect,
		handleWorkoutTypeSelect,
	} = useTrainingSelection();

	return (
		<VStack align='center' gap={8} width="100%" maxW="md">
			<VStack align='center' gap={2}>
				<LogoIcon width={32} height={32} />
				<Heading as='h1' size='xl' color='brand.purple.50' fontWeight='normal'>
					Собери тренировку
				</Heading>
				<Text color='brand.purple.50' fontSize='sm'>
					Выбери оборудование и цель
				</Text>
			</VStack>

			<EquipmentSelector
				equipmentOptions={equipmentOptions}
				selectedEquipment={equipment}
				onEquipmentSelect={handleEquipmentSelect}
			/>

			<Icon boxSize={6} color='brand.orange.500'>
				<PlusIcon width={24} height={24} />
			</Icon>

			<WorkoutTypeSelector
				workoutTypeOptions={availableWorkoutTypes}
				selectedType={workoutType}
				onWorkoutTypeSelect={handleWorkoutTypeSelect}
			/>


		</VStack>
	);
}
