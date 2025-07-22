import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export function HomeButton() {
  return (
    <Link href="/" passHref>
      <Box
        w="48px"
        h="48px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        _hover={{ border: "1px solid", borderColor: "orange.500" }}
        cursor="pointer"
      >
        <Image src="/logo.svg" alt="На главную" width={24} height={24} />
      </Box>
    </Link>
  );
}