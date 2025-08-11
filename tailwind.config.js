/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Background Colors
        background: {
          primary: '#000000',
          secondary: '#0A0A0A',
          tertiary: '#111111'
        },
        // Text Colors
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E5E5'
        },
        // Gold Shades
        gold: {
          DEFAULT: '#937127',
          light: '#B38D3F',
          lighter: '#D4AF37',
          dark: '#785C1F',
        },
        // Blue Shades (Bolt.new style)
        blue: {
          DEFAULT: '#0066FF',
          light: '#3385FF',
          dark: '#0052CC',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'], // Changed from montserrat to poppins
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
