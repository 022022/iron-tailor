import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          purple: {
            50: { value: '#faf5ff' },
            100: { value: '#f3e8ff' },
            400: { value: '#c084fc' },
            500: { value: '#a855f7' },
            950: { value: '#1a032e' },
          },
          orange: {
            500: { value: '#f97316' },
          },
          gray: {
            300: { value: '#d4d4d8' },
          },
          white: { value: '#ffffff' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);