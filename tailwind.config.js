/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1700px',
    },

    extend: {
      screens: {
        'xs': {'min': '10px', 'max': '576px'},
      },
     
    },
  },
  plugins: [],
}
