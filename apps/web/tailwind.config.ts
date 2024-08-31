import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1920px',
        xl: '1200px',
        md: '800px',
        sm: '360px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-card':
          'linear-gradient(112deg, rgba(29, 40, 56, 0.50) 0%, rgba(29, 40, 56, 0.35) 100%)',
      },
      backgroundColor: {
        'nav-blue': 'rgba(49, 131, 255, 0.25)',
      },
      colors: {
        'tokamak-blue': {
          DEFAULT: '#0070ED',
          dark: '#0057E6',
        },
        'trh-gray': {
          light: '#D8DFE9',
          DEFAULT: '#616D7E',
          'close-modal': '#64646F',
        },
        'trh-red': '#FF0420',
        'trh-green': '#06D863',
        'text-negative': '#FD3D51',
        'text-warning': '#FF7E12',
      },
      keyframes: {
        'v-stack-1-move-800': {
          '0%': {
            visibility: 'hidden',
          },
          '50%': {
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateX(-30%)',
          },
        },
        'v-stack-1-move': {
          '0%': {
            visibility: 'hidden',
          },
          '50%': {
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateX(-40%)',
          },
        },
        'v-stack-3-move-800': {
          '0%': {
            visibility: 'hidden',
          },
          '50%': {
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateX(80%)',
          },
        },
        'v-stack-3-move': {
          '0%': {
            visibility: 'hidden',
          },
          '50%': {
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateX(60%)',
          },
        },
        'h-stack-2-move': {
          '0%': {
            visibility: 'hidden',
          },
          '50%': {
            visibility: 'visible',
          },
          '100%': {
            transform: 'translate(10%, -50%)',
          },
        },
        'h-stack-3-move': {
          '0%': {
            visibility: 'hidden',
          },
          '50%': {
            visibility: 'visible',
          },
          '100%': {
            transform: 'translate(45%, 0%)',
          },
        },
        'fade-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)',
          },
        },
        'fade-top': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'v-stack-1-800': 'v-stack-1-move-800 2s 1 forwards',
        'v-stack-3-800': 'v-stack-3-move-800 2s 1 forwards',
        'v-stack-1': 'v-stack-1-move 2s 1 forwards',
        'v-stack-3': 'v-stack-3-move 2s 1 forwards',
        'h-stack-2': 'h-stack-2-move 2s 1 forwards',
        'h-stack-3': 'h-stack-3-move 2s 1 forwards',
        'v-stacks-appear': 'fade-right 1s',
        'h-stacks-appear': 'fade-top 1s',
      },
    },
    fontFamily: {
      sans: ['Proxima Nova', ...fontFamily.sans],
    },
  },
  plugins: [require('daisyui')],
};
export default config;
