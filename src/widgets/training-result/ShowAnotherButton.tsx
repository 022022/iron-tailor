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
			w='32px'
			h='32px'
			display='flex'
			alignItems='center'
			justifyContent='center'
			borderRadius='50%'
			_hover={{ boxShadow: '0px 0px 12px 0px rgba(255,255,255,0.9)' }}
			cursor='pointer'
			color='brand.purple.500'
			onClick={handleClick}
		>
			<ShowAnotherIcon width={32} height={32} />
		</Box>
	);
}
