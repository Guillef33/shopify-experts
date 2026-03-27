import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#111111",
        card: "#161616",
        border: "#222222",
        green: {
          DEFAULT: "#00C853",
          dark: "#00A843",
          muted: "#1a3d2b",
        },
        cream: "#F0EBE1",
        muted: "#666666",
        mid: "#999999",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        heading: ["Syne", "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "ticker-slow": "ticker 50s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "spin-slow": "spin 12s linear infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
