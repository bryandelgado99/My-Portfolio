/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Añadir estilos personalizados
      colors: {
        'md-outline': '#fbfbfb',
        'md-on-surface': '#fbfbfb',
        'md-secondary-container': '#cce8e7',
        'md-filter-chip-label-text': '#fbfbfb',
        'md-filter-chip-selected-container': 'rgb(129 140 248)',
      },
      fontFamily: {
        title: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        label: ["Poppins", "sans-serif"],
        'md-filter-chip-label': ["Poppins", "sans-serif"], // Nueva fuente personalizada
      },
      borderRadius: {
        'md-filter-chip-container': '16px', // Nueva forma personalizada
      },
    },
    screens: {
      'sm': '800px',
    },
    darkMode: 'class',
  },
  plugins: [],
}