/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Inclut JSX, TS, et TSX
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'buccaneer': {
          '50': '#fbf5f1',
          '100': '#f5e8df',
          '200': '#eacdbe',
          '300': '#ddab94',
          '400': '#ce8269',
          '500': '#c4654b',
          '600': '#b65140',
          '700': '#974037',
          '800': '#7a3632',
          '900': '#5a2a27',
          '950': '#351615',
      },
      
      },
      container: {
        center: true,
        
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
