export const animations = {
  keyframes: {
    'pulse-slow': {
      '0%, 100%': { opacity: '0.1' },
      '50%': { opacity: '0.2' },
    }
  },
  animation: {
    'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  }
} as const;