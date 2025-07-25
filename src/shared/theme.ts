import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          purple: {
            50: { value: '#f3e8ff' },
            100: { value: '#e9d5ff' },
            400: { value: '#a78bfa' },
            500: { value: '#8b5cf6' },
            950: { value: '#2e1065' },
          },
          orange: {
            500: { value: '#f97316' },
          },
          gray: {
            300: { value: '#d1d5db' },
          },
          white: { value: '#ffffff' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);