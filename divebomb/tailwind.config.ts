// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This targets your src/ folder
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#e10600', // Custom Red Color
        },
        /* dark: {
          bg: '#121212',
          card: '#1e1e1e',
          nav: '#000000',
        },
        light: {
          bg: '#f4f4f4',
          card: '#ffffff',
        } */
      },
      fontFamily: {
        sans: ['var(--font-inter)'], 
        display: ['var(--font-oswald)'], 
      }
    },
  },
  plugins: [],
};
export default config;