import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',

      'md': '744px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px'
    },
  
    extend: {
      backgroundImage: {
        'grosvenor': "url('/blue-window-ltd-assignment/public/Grosvenor-casinos.png')",
        'happy-spins': "url('/blue-window-ltd-assignment/public/Happy-spins.png')",
        'hajpers': "url('/blue-window-ltd-assignment/public/Hajpers.png')",
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        sans_secondary: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
export default config;
