'use client';

import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { viewedProgramIdsAtom } from '@/features/training-selector/model/atoms';
import {
	getMatchingPrograms,
	getNextProgramId,
} from '@/shared/lib/training-utils';
import { useMemo } from 'react';
import ShowAnotherIcon from '@/shared/lib/icons/ShowAnotherIcon';

interface ShowAnotherButtonProps {
	equipment: string[];
	workoutType: string;
	currentId: string;
}

export function ShowAnotherButton({
	equipment,
	workoutType,
	currentId,
}: ShowAnotherButtonProps) {
	const router = useRouter();
	const [viewedIds, setViewedIds] = useAtom(viewedProgramIdsAtom);

	const programs = useMemo(
		() => getMatchingPrograms(equipment, workoutType),
		[equipment, workoutType]
	);

	const handleClick = () => {
		const newViewed = viewedIds.includes(currentId)
			? viewedIds
			: [...viewedIds, currentId];
		setViewedIds(newViewed);

		const nextId = getNextProgramId(programs, currentId, newViewed);
		const params = new URLSearchParams({
			equipment: equipment.join(','),
			workoutType: workoutType || '',
			programId: nextId,
		});
		router.push(`/result?${params.toString()}`);
	};

	return (
		<Box
			aria-label='Наверх'
			w='48px'
			h='48px'
			display='flex'
			alignItems='center'
			justifyContent='center'
			borderRadius='md'
			_hover={{ border: '1px solid', borderColor: 'orange.500' }}
			cursor='pointer'
			onClick={handleClick}
		>
			<ShowAnotherIcon width={32} height={32} />
		</Box>
	);
}
