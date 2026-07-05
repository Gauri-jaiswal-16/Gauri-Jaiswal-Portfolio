import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF8F5",
        card: "#FFFFFF",
        primary: "#1F4D3A",
        accent: "#3FA66B",
        highlight: "#F59E0B",
        "soft-accent": "#D6F5E3",
        ink: "#1B1B1B",
        muted: "#6B7280",
        line: "#E5E7EB",
        "canvas-dark": "#0F1512",
        "card-dark": "#101E1A",
        "ink-dark": "#F1F5F3",
        "muted-dark": "#93A6A0",
        "line-dark": "#1D2E29",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,118,110,0.05), 0 8px 24px -12px rgba(15,118,110,0.14)",
        lift: "0 20px 40px -16px rgba(15,118,110,0.24)",
        glow: "0 0 0 1px rgba(20,184,166,0.15), 0 8px 30px -8px rgba(20,184,166,0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-18px) translateX(8px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
        "fade-in": "fade-in 0.4s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
