/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './JS/script.js'],
  theme: {
    extend: {
      colors: {
        'primary': '#1f1f1f',
        'secondary': '#0f172a',
        'fade': '#64748b',
        'solid': '#1e293b',
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

