/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
      fontFamily: {
        title: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        label: ["Poppins", "sans-serif"]
      }
    },
    screens:{
      'sm': '700px',
    }
  },
  plugins: [],
}