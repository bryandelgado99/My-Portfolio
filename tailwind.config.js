/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-move': 'gradientMove 12s ease infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      // Definir los colores del gradiente
      backgroundImage: {
        'gradient-base-purple': 'linear-gradient(330deg, blue, #8267e9)',
        'gradient-second-purple': 'linear-gradient(330deg,#8267e9,#848cdd,#6b5fef)'
      },
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
        'z4':'0.92',
        'small':'0.3'
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