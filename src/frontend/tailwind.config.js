/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Garante que todos os arquivos dentro da pasta src sejam escaneados
        "./src/styles/globalStyles.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

