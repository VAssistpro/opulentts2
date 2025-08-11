export const variants = {
  glassmorphic: {
    light: 'bg-white/70 backdrop-blur-xl border-gold/30',
    dark: 'bg-black/80 backdrop-blur-xl border-gold/30'
  },
  button: {
    light: 'bg-gold/75 text-black hover:bg-gold/95 hover:text-black',
    dark: 'bg-black/80 text-gold hover:bg-gold hover:text-black'
  },
  card: {
    light: 'bg-white/70 shadow-gold/20',
    dark: 'bg-black/90 shadow-gold/20'
  }
} as const;