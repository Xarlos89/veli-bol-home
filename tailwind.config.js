/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F2EDE5',
        'cream-dark': '#E8E1D7',
        navy: {
          DEFAULT: '#0C1B2B',
          light: '#142333',
          card: '#1A2F44',
        },
        amber: {
          DEFAULT: '#C9973A',
          light: '#D4AA55',
        },
        ink: '#1A1409',
        soft: '#DDD6CC',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
