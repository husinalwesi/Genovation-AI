/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
        "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens: {
        'lg-exclude-ipad': { 'min': '1024.98px' },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        /* Normal style */
        '.poppins-thin': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '100',
          'font-style': 'normal',
        },
        '.poppins-extralight': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '200',
          'font-style': 'normal',
        },
        '.poppins-light': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '300',
          'font-style': 'normal',
        },
        '.poppins-regular': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '400',
          'font-style': 'normal',
        },
        '.poppins-medium': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '500',
          'font-style': 'normal',
        },
        '.poppins-semibold': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '600',
          'font-style': 'normal',
        },
        '.poppins-bold': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '700',
          'font-style': 'normal',
        },
        '.poppins-extrabold': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '800',
          'font-style': 'normal',
        },
        '.poppins-black': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '900',
          'font-style': 'normal',
        },

        /* Italic style */
        '.poppins-thin-italic': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '100',
          'font-style': 'italic',
        },
        '.poppins-extralight-italic': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '200',
          'font-style': 'italic',
        },
        '.poppins-light-italic': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '300',
          'font-style': 'italic',
        },
        '.poppins-regular-italic': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '400',
          'font-style': 'italic',
        },
        '.poppins-medium-italic': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '500',
          'font-style': 'italic',
        },
        '.poppins-semibold-italic': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '600',
          'font-style': 'italic',
        },
        '.poppins-bold-italic': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '700',
          'font-style': 'italic',
        },
        '.poppins-extrabold-italic': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '800',
          'font-style': 'italic',
        },
        '.poppins-black-italic': {
          'font-family': '"Poppins", sans-serif',
          'font-weight': '900',
          'font-style': 'italic',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
}

