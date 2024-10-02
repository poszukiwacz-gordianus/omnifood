/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFFCF5",
          100: "#FCF6E8",
          200: "#FAE8C5",
          300: "#F5D6A2",
          400: "#EDAE61",
          500: "#e67e22",
          600: "#CF6D1D",
          700: "#AB5213",
          800: "#8A3A0C",
          900: "#662707",
          950: "#421603",
        },
        secondary: {
          50: "#F7F7F7",
          100: "#EDEDED",
          200: "#D4D4D4",
          300: "#BABABA",
          400: "#878787",
          500: "#555555",
          600: "#4D4545",
          700: "#403030",
          800: "#331F1F",
          900: "#261111",
          950: "#1A0707",
        },
        accent: {
          50: "#F5F5F5",
          100: "#EBEBEB",
          200: "#CCCCCC",
          300: "#ADADAD",
          400: "#707070",
          500: "#333333",
          600: "#2E2929",
          700: "#261D1D",
          800: "#1F1212",
          900: "#170A0A",
          950: "#0F0404",
        },
      },
      fontFamily: {
        sans: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
};
