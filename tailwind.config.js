/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xsm : '300px',
      sm : '550px',
      md : '800px',
      lg : '1000px',
      'xsh': { 'raw': '(min-height: 600px)' },
      'sh': { 'raw': '(min-height: 700px)' },
      'mdh': { 'raw': '(min-height: 900px)' },
      'lgh': { 'raw': '(min-height: 1050px)' },
      
    },
    extend: {},
  },
  plugins: [],
}