/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './JS/script.js'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#1f1f1f',
        'secondary': '#0f172a',
        'fade': '#64748b',
        'solid': '#1e293b',

        'dark-bg': '#1f1f1f',
        'dark-bg-up': '#2f2f2f',
        'dark-el': '#fcfcfc',
        'dark-el-fade': '#d4d4d4',
      },
      fontFamily: {
        'outfit': 'Outfit, sans-serif',
        'funnel': 'Funnel Sans, sans-serif',
        'jost': 'jost, sans-serif',
        'didact': 'Didact Gothic, serif',
        'inter': 'Inter, serif',
        'manrope': 'Manrope, serif',
        'hostg': 'Host Grotesk, serif',
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

