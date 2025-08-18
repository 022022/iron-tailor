import { HomeButton } from '@/widgets/training-result/HomeButton';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function NotFound() {
	return (
		<Box
			as='main'
			minH='100vh'
			w='full'
			p={4}
			bg='brand.purple.950'
			display='grid'
			placeContent='center'
      justifyItems='center'
			gap={2}

		>
			<Heading as='h2' size='lg' color='brand.purple.50' textAlign='center'>
				Тренировка не найдена
			</Heading>
			<Text color='brand.purple.50' mb={2} textAlign='center'>Попробуйте другие параметры</Text>
			<HomeButton/>
		</Box>
	);
}
