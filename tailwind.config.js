/** / @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroImage': "url('/public/arcade.jpg')",
      },
      fontFamily: {
        'PressStart2P': ['"Press Start 2P"', 'serif;'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
