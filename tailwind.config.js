/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        rem: ['REM'],
        bricolage: ['Bricolage Grotesque'],
        caprasimo: ['Caprasimo']
      }
    },
  },
  plugins: [],
}

