import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#f1f1f1',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
};
export default config;
