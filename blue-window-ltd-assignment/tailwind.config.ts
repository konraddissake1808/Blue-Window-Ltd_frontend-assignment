import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grosvenor': "url('/blue-window-ltd-assignment/public/Grosvenor-casinos.png')",
        'happy-spins': "url('/blue-window-ltd-assignment/public/Happy-spins.png')",
        'hajpers': "url('/blue-window-ltd-assignment/public/Hajpers.png')",
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};
export default config;
