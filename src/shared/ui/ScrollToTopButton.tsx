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
			w='32px'
			h='32px'
      p='2px'
			display='flex'
			alignItems='center'
			justifyContent='center'
			borderRadius='50%'
			_hover={{ boxShadow: '0px 0px 12px 0px rgba(255,255,255,0.9)' }}
			cursor='pointer'
			onClick={handleClick}
      fill={'brand.white'}
		>
			<UpIcon width={32} height={32} />
		</Box>
	);
};
