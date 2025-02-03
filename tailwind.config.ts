import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        monts: ["var(--font-monts)"],
        fire: ["var(--font-fire)"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #0E0E0E, #0A2C3B )",
      },
      colors: {
        "primary-dark": "#48422D",
        "secondary-dark": "#2C2C3E",
        "para-dark": "#8D9DBC",
        accent: "#20B4CE",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        navsize: { max: "1180px" },
        tab: { max: "991px" },
        mob: { max: "768px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
