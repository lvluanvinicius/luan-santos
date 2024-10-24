import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            900: "#101211",
            800: "#171918",
            700: "#202221",
            600: "#2e3130",
            400: "#dbdbdb",
            300: "#ebebeb",
            200: "#f7f7f7",
            100: "#fff",
            accent: "#ffc44d",
            "accent-medium": "#ffda8f",
            "accent-light": "#fff0d1",
            "white-secondary": "#d1d1d1",
            purple: "#6557be",
          },
        },
      },
    }),
  ],
};
