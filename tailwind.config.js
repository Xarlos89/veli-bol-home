/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        sea: {
          deep: '#0B4F6C',
          mid: '#1A7A9E',
          light: '#2EC4B6',
        },
        sunset: {
          orange: '#E8873A',
          gold: '#F4C55A',
        },
        sand: '#F5EDD6',
        ink: '#1A1A2E',
      },
      fontFamily: {
        display: ['Raleway', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
