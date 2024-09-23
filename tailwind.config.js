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
        label: ["Poppins", "sans-serif"],
        title: ["JetBrains Mono", "sans-serif"],
        body: ["Open", "sans-serif"],
        'md-filter-chip-label': ["Poppins", "sans-serif"], // Nueva fuente personalizada
      },
      borderRadius: {
        'md-filter-chip-container': '16px',
        '6xl': '24px' // Nueva forma personalizada
      },
      scale: {
        'mid':'1.12',
        'z1':'1.05',
        'z2':'1.00',
        'z3':'0.95',
        'z4':'0.92'
      }
    },
    screens: {
      'sm': '900px',
      'tablet':'700px'
    },
    darkMode: 'class',
  },
  plugins: [],
}