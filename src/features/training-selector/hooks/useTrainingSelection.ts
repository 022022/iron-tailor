import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import {
	equipmentAtom,
	workoutTypeAtom,
} from '@/features/training-selector/model/atoms';
import { useCallback } from 'react';

export function useTrainingSelection() {
	const [equipment, setEquipment] = useAtom(equipmentAtom);
	const [workoutType, setWorkoutType] = useAtom(workoutTypeAtom);
	const router = useRouter();

	const handleEquipmentSelect = useCallback((value: string) => {
		let newEquipment: string[];

		if (equipment.includes(value)) {
			newEquipment = equipment.filter((eq) => eq !== value);
		} else {
			newEquipment = [...equipment, value];
		}

		setEquipment(newEquipment);

		if (newEquipment.length === 0) {
			setWorkoutType('');
		}
	}, [equipment, setEquipment, setWorkoutType]);

	const handleWorkoutTypeSelect = useCallback((value: string, disabled: boolean) => {
		if (disabled || equipment.length === 0) {
			return;
		}
		const url = `/result?equipment=${encodeURIComponent(
			equipment.join(',')
		)}&workoutType=${encodeURIComponent(value)}`;
		router.push(url);
	}, [equipment, router]);

	return {
		equipment,
		workoutType,
		handleEquipmentSelect,
		handleWorkoutTypeSelect,
	};
}
