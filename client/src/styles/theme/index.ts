import { colors } from './colors';
import { animations } from './animations';
import { spacing } from './spacing';

export const theme = {
  colors,
  animations,
  spacing,
  fontFamily: {
    playfair: ['"Playfair Display"', 'serif'],
    montserrat: ['Montserrat', 'sans-serif'],
  },
} as const;

export type Theme = typeof theme;