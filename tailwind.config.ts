import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: { 'image-width':'clamp(5rem, 20vw, 17.887rem)',
        'image-height':'clamp(13.672rem, 60vw, 46.875rem)',
        'gap':'clamp(0.313rem, 3vw, 1.25rem)',
        'photo-width': 'clamp(7.5rem,20vw, 30rem)',
        'photo-height': 'clamp(4.219rem,16vh, 16.875rem)',
        'image-card': 'clamp(11.875rem, 20vw, 15.625rem)'},
      fontSize: {
        "title": "clamp(3rem, 0.0821rem + 11.7302vw, 8rem)",
        "heading-1": "clamp(2.5rem, 6.5vw, 10rem)",
        "heading-2": "clamp(2.4rem, 5vw, 10rem)",
        "heading-3": "clamp(2rem, 5vw, 2.25rem)",
        "heading-4": "clamp(2rem, 0.543rem + 4.952vw, 4rem)",
        "special": "clamp(1.25rem, 4vw, 1.5rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
