/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/(tabs)/index.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
  
}

