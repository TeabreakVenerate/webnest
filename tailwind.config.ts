import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "clinical-white": "#FFFFFF",
        "covenant-blue": "#0F3D70",
        "high-vis-yellow": "#FFC107",
        covenant: "#0F3D70",
      },
      boxShadow: {
        "brutal-base": "4px 4px 0 0 #0F3D70",
        "brutal-hover": "6px 6px 0 0 #0F3D70",
        "brutal-sm": "2px 2px 0 0 #0F3D70",
        "brutal-lg": "8px 8px 0 0 #0F3D70",
      },
    },
  },
  plugins: [],
};

export default config;
