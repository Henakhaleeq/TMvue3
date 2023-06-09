/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '752px',
          },
          '@screen lg': {
            maxWidth: '976px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
        }
      })
    },
    function ({ addVariant }) {
      addVariant('mobile-only', "@media screen and (max-width: 767px)"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    },
    function ({ addVariant }) {
      addVariant('Tab-only', "@media screen and (min-width: 768px) and (max-width: 1023px)"); // instead of hard-coded 
    },
    function ({ addVariant }) {
      addVariant('Lap-only', "@media screen and (min-width: 1024px) and (max-width: 1279px)"); // instead of hard-coded 
    },
  ],

}
