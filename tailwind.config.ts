import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      daisyui: {
        themes: ["dracula"],
      },
      
    },
  },
  plugins: [
    require('daisyui'),

  ],
  daisyui: {
    themes: ["dracula"], // Tambahkan tema Dracula di sini
  },
  
};
export default config;
