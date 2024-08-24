import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#0B1120", // Background
        border: "#343841", // Border
        card: "#1E293B", // Card color
        muted: "#A0A4A3", // Muted
        primary: "#0EA5E9", // Primary
        secondary: "#FFFFFF", // Secondary
        destructive: "#EF4444", // Destructive
        "card-darker": "#18212F", // Card darker
      },
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
      },
      dropShadow: {
        primary: "0px 0px 48px rgba(14, 165,233, 0.35)",
      },
      listStyleType: {
        square: "square",
        circle: "circle",
        "lower-alpha": "lower-alpha",
        "lower-roman": "lower-roman",
      },
    },
  },
  plugins: [],
};

export default config;
