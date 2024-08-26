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
    },
    fontFamily: {
      sans: ['Proxima Nova', ...fontFamily.sans],
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
