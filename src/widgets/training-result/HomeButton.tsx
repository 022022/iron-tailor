import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export function HomeButton() {
  return (
    <Link href="/" passHref>
      <Box
        aria-label="На главную"
        w="32px"
        h="32px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        _hover={{ boxShadow: "0px 0px 12px 0px rgba(255,255,255,0.9)" }}
        cursor="pointer"
      >
        <Image src="/logo.svg" alt="На главную" width={32} height={32}  />
      </Box>
    </Link>
  );
}