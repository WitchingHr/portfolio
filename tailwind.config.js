/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'dev': {
          "0%": { color: '#ff0000' },
          "33%": { color: '#ff00b4' },
          "66%": { color: '#0064c8' },
        },
      },
      animation: {
        'dev': 'dev 5s ease alternate infinite',
      },
    },
  },
  plugins: [],
}
