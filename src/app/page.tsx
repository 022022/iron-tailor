import { metadata } from './page.metadata';
import { TrainingSelector } from '@/features/training-selector/TrainingSelector';
import { Box } from '@chakra-ui/react';

export { metadata };

export default function Home() {
	return (
		<Box
			as='main'
			minH='100vh'
			width='100%'
			display='flex'
			flexDirection='column'
			p={8}
			bg='purple.950'
			alignItems='center'
			justifyContent='center'
		>
			<TrainingSelector />
		</Box>
	);
}
