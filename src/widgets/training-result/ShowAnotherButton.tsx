'use client';
import { Button, IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { viewedProgramIdsAtom } from '@/features/training-selector/model/atoms';
import {
	getMatchingPrograms,
	getNextProgramId,
} from '@/shared/lib/training-utils';
import { useMemo } from 'react';
import Image from 'next/image';

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

	const handleAnother = () => {
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
		<IconButton
			onClick={handleAnother}
			h='48px'
			w='48px'
			p={0}
			bg='transparent'
			borderRadius='md'
			_hover={{ border: '1px solid', borderColor: 'orange.500' }}
		>
			<Image src='/show-another-icon.svg' alt='' width={24} height={24} />
		</IconButton>
	);
}
