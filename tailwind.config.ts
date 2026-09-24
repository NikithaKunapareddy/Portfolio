import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050510",
        panel: "rgba(30, 30, 40, 0.4)",
        paper: "#FFFFFF",
        muted: "#A1A1AA",
        signal: "#06B6D4",
        primary: "#8B5CF6",
        secondary: "#EC4899",
        accent: "#F43F5E",
        wire: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-plex)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 10px rgba(139, 92, 246, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.6)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
