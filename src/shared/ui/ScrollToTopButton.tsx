'use client';

import React from 'react';
import UpIcon from '@/shared/lib/icons/UpIcon';
import { Box } from '@chakra-ui/react';

export const ScrollToTopButton: React.FC = () => {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
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
			<UpIcon width={32} height={32} />
		</Box>
	);
};
