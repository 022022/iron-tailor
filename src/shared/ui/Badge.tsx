'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';

export type BadgeVariant = 'muscles' | 'type' | 'equipment';

const variantProps: Record<BadgeVariant, { bg: string; color: string; fontSize: string; p: string }> = {
  muscles: {
    bg: 'gray.200',
    color: 'gray.800',
    fontSize: '0.875rem', // sm
    p: '0 4px',
  },
  type: {
    bg: 'orange.500',
    color: 'white',
    fontSize: '1rem', // md
    p: '2px 8px',
  },
  equipment: {
    bg: 'brand.purple.500',
    color: 'white',
    fontSize: '1rem', // md
    p: '2px 8px',
  },
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant, style, ...rest }) => {
  const { bg, color, fontSize, p } = variantProps[variant];
  return (
    <Box
      as="span"
      borderRadius="md"
      fontWeight={500}
      display="inline-block"
      bg={bg}
      color={color}
      fontSize={fontSize}
      p={p}
      {...rest}
      style={style}
    >
      {children}
    </Box>
  );
};