import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#0B1120", // Background
        border: "#343841", // Border
        muted: "#9A9A9A", // Muted
        primary: "#0EA5E9", // Primary
        secondary: "#F5F5F5", // Secondary
      },
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
