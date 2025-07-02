/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
        "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens: {
        'lg-exclude-ipad': { 'min': '1024.98px' },
      }      
    },
  },
  plugins: []
  // @media (min-width: 1024px) {
}

