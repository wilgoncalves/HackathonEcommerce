/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/styles/globalStyles.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        caveat: ['Caveat Brush', 'cursive'],
      },
      colors: {
        primaryGreen: 'var(--primary-green-color)',
        secondaryGreen: 'var(--secondary-green-color)',
        darkerGreen: 'var(--darker-green)',
        redNormal: 'var(--red-normal)',
        // darkRed: 'var(--dark-red)',
        // darkerRed: 'var(--darker-red)', 
        blackNormal: 'var(--black-normal)',
        whiteNormal: 'var(--white-normal)',
        whatsappColor: 'var(--whatsapp-color)',
        primaryDarkLight: 'var(--dark-light-color)',
        darkFadeColor: 'var(--dark-fade-color)',
        opacityDarkLight: 'var(--opacityDarkLight)',
      },
    },
  },
  plugins: [],
}

