import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        ink: {
          50: "#f4f6ff",
          100: "#e5e9ff",
          200: "#cbd3ff",
          300: "#a4b0ff",
          400: "#7b86ff",
          500: "#5360ff",
          600: "#2938ff",
          700: "#1f2ccc",
          800: "#182399",
          900: "#111966",
        },
        glow: "#f8d3ff",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(83, 96, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(83, 96, 255, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
