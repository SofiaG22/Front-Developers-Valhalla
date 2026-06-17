import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6D28D9",
          deep: "#4C1D95",
          hover: "#7C3AED",
        },
        surface: "#0C0618",
        "surface-elevated": "#120A22",
        border: "#2A1A4A",
        muted: "#A1A1AA",
        foreground: "#F8FAFC",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        brand: "16px",
        card: "20px",
      },
      boxShadow: {
        glow: "0 0 60px rgba(109, 40, 217, 0.2), 0 0 120px rgba(109, 40, 217, 0.08)",
        "glow-sm": "0 0 32px rgba(109, 40, 217, 0.15)",
        "glow-btn": "0 0 24px rgba(109, 40, 217, 0.4)",
      },
      animation: {
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "scan-line": "scan-line 8s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
