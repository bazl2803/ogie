import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/features/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          poppins: {value: 'var(--font-poppins), Poppins'},
          inter: {value: 'var(--font-inter), Inter'}
        }
      }
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
