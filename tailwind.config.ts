import colors from "tailwindcss/colors";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";
import typography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js
    "./public/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#85200c",
          50: "#fae8e4",
          100: "#f2c7c0",
          200: "#e0a49b",
          300: "#cc7f74",
          400: "#b45a4f",
          500: "#85200c",
          600: "#69190a",
          700: "#4f1307",
          800: "#330c05",
          900: "#1a0502",
        },
        gray: colors.neutral,
        background: "#161616",
        textPrimary: "#b7b7b7",
        primary: {
          DEFAULT: '#E94E1B', // Bright red/orange for CTAs
          blue: '#2a6baa',
          orange: '#d97027'
        },
        secondary: {
          green: '#2EB67D',
          purple: '#9A6DC1',
          blue: '#93c5fd',
        },
        neutral: {
          light: '#F7F7F7',
          dark: '#1B1B1B',
        },
        accent: {
          orange: '#FF8C42',
          red: '#D72638',
          vampire: '#efefef'
        },
      },
      fontFamily: {
        belle: ['"La Belle Aurore"', "cursive"],
        della: ["'Della Respira'", "serif"],
        fell: ["'IM Fell English SC'", "serif"],
        marcellus: ["'Marcellus SC'", "serif"],
        cinzel: ["'Cinzel Decorative'", "serif"],
      },
      backgroundImage: {
        "gradient-header": "linear-gradient(to right, #85200c, #d3563f)",
      },
      boxShadow: {
        brand: "0 4px 6px -1px rgba(133, 32, 12, 0.5), 0 2px 4px -1px rgba(133, 32, 12, 0.3)",
      },
    },
  },
  safelist: [
    "text-red-500",
    "bg-blue-500",
    "hover:bg-green-500",
    "bg-brand",
    "text-accent",
  ],
  plugins: [forms, aspectRatio, typography],
};
