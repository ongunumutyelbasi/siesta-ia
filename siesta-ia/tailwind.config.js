// tailwind.config.js

const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... (content and other top-level configs remain the same)
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Now', ...fontFamily.sans],
      },

      transitionDuration: {
        '5000': '5000ms', // This generates the required 'duration-5000' class
        // Add any other custom durations you might need here (e.g., '7000': '7000ms')
      },
    },
  },
  plugins: [],
}