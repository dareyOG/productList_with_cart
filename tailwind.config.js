/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      red: 'hsl(14,86%,42%)',
      green: 'hsl(159, 69%, 38%)',
      rose: {
        50: 'hsl(20, 50%, 98%)',
        100: 'hsl(13, 31%, 94%)',
        300: 'hsl(14, 25%, 72%)',
        400: 'hsl(7, 20%, 60%)',
        500: 'hsl(12, 20%, 44%)',
        900: 'hsl(14, 65%, 9%)',
      },
      attribution: 'hsl(228, 45%, 44%)',
    },
    screens: {
      tablets: '768px',
      desktops: '1024px',
    },
    fontFamily: {
      sans: ['Red Hat Text', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700',
    },
    extend: {},
  },
  plugins: [],
};
