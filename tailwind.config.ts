import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'smallLaptop': '879px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        'paragraphS': ['12px', { lineHeight: '18px', fontWeight: '400' }],
        'paragraphM': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'paragraphL': ['18px', { lineHeight: '24px', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
};
export default config;
