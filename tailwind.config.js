/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  lightMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       fontFamily: {
      nova: ['"Nova Cut"', 'cursive'],
    },
    },
  },
  plugins: [],
};
