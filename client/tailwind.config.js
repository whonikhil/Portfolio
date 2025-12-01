/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- THIS LINE IS CRITICAL. IT ENABLES THE TOGGLE.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5A3",
        accent: "#7C3AED",
        dark: "#0f172a",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}