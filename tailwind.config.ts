import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1FB6FF",
        "primary-dark": "#0EA5E9",
        accent: "#F5C542",
        "accent-dark": "#EAB308",
        dark: "#0B0F19",
        success: "#00B894",
        "success-dark": "#059669",
        warning: "#F59E0B",
        danger: "#EF4444",
        "gray-custom": {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.08)",
        "soft-lg": "0 10px 40px rgba(0,0,0,0.12)",
        "soft-xl": "0 20px 60px rgba(0,0,0,0.15)",
        glow: "0 0 20px rgba(31, 182, 255, 0.3)",
        "glow-accent": "0 0 20px rgba(245, 197, 66, 0.4)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        fadeInUp: "fadeInUp .8s ease both",
      },
      fontFamily: {
        tajawal: ["var(--font-tajawal)"],
      },
    },
  },
  plugins: [],
};

export default config;

