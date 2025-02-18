/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
};
