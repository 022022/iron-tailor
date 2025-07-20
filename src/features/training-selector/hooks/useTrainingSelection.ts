import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import {
	equipmentAtom,
	workoutTypeAtom,
} from '@/features/training-selector/model/atoms';

export function useTrainingSelection() {
	const [equipment, setEquipment] = useAtom(equipmentAtom);
	const [workoutType, setWorkoutType] = useAtom(workoutTypeAtom);
	const router = useRouter();

	const handleEquipmentSelect = (value: string) => {
		let newEquipment: string[];

		if (equipment.includes(value)) {
			newEquipment = equipment.filter((eq) => eq !== value);
		} else {
			newEquipment = [...equipment, value];
		}

		setEquipment(newEquipment);

		// Если оборудование снято, сбрасываем тип тренировки
		if (newEquipment.length === 0) {
			setWorkoutType('');
		}
	};

	const handleWorkoutTypeSelect = (value: string, disabled: boolean) => {
		if (disabled || equipment.length === 0) return;
		const url = `/result?equipment=${encodeURIComponent(
			equipment.join(',')
		)}&workoutType=${encodeURIComponent(value)}&random=1`;
		router.push(url);
	};

	return {
		equipment,
		workoutType,
		handleEquipmentSelect,
		handleWorkoutTypeSelect,
	};
}
