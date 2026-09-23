import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "EB Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        espresso: {
          deep: "#0c0b0a",
          DEFAULT: "#141312",
          surface: "#181715",
          elevated: "#211f1e",
          border: "rgba(245, 242, 235, 0.07)",
          borderHover: "rgba(200, 169, 126, 0.35)",
        },
        ivory: {
          DEFAULT: "#F5F2EB",
          muted: "#D4CEC3",
          faint: "#8C8275",
          deep: "#575249",
        },
        brass: {
          DEFAULT: "#C8A97E",
          light: "#E5C497",
          dark: "#8C6D45",
          glow: "rgba(200, 169, 126, 0.2)",
        },
      },
      keyframes: {
        soundwave: {
          "0%, 100%": { height: "4px" },
          "50%": { height: "14px" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.2)" },
        },
      },
      animation: {
        soundwave: "soundwave 1.2s ease-in-out infinite",
        pulseSlow: "pulseSlow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
