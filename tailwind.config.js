/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPink: '#FFCCEB',
        pink: '#FF99CC',
        fuchsia: '#FF66B2',
      },
    },
  },
  plugins: [],
};
