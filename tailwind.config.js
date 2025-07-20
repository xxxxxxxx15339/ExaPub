/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#34433e', // Vert foncé profond
        },
        secondary: {
          DEFAULT: '#99b3b4', // Vert-gris doux
        },
        accent: {
          DEFAULT: '#d36332', // Orange vif (nouveau)
          brown: '#674c31',   // Brun foncé
          beige: '#ae9377',   // Beige chaud
        },
        neutral: {
          white: '#ffffff',
          dark: '#1e293b',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 