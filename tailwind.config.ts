import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: 'var(--primary)',
      'primary-hover': 'var(--primary-hover)',
      secondary: 'var(--secondary)',
      'secondary-hover': 'var(--secondary-hover)',
      'text-on-primary': 'var(--text-on-primary)',
      'text-on-secondary': 'var(--text-on-secondary)',
      text: 'var(--text)',
      gray: {
        100: 'var(--gray-100)',
        200: 'var(--gray-200)',
      }
    },
  },
  plugins: [],
};
export default config;
