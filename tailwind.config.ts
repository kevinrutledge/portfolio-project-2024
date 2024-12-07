import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['var(--font-crimson)', 'serif'],
        utopia: ['var(--font-utopia)', 'serif'],
      },
      colors: {
        'primary': '#1a0dab',
        'secondary': '#555555',
        'background': '#ffffff',
        'text': '#222222',
        'navbar': '#f4f4f4',
        'footer': {
          DEFAULT: '#333333',
          text: '#ffffff',
        },
        'border': '#cccccc',
      },
    },
  },
  plugins: [],
};

export default config;