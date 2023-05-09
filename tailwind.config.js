/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "0",
      md: "700px",
      lg: "1024px",
      xl: "1300px",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    fontSize: {
      sm: "14px",
      md: "24px",
    },
    colors: {
      transparent: "rgba(0,0,0,0)",
      primary500: "#3F96F3",
      primary600: "#2F76D2",
      secondary500: "#FCEB4F",
      neutral0: "#FFFFFF",
      neutral900: "#000000",
      alert400: "#FFEBEB",
      alert500: "#D70D0D",
      validate400: "#C6EBD4",
      validate500: "#31784B",
    },
    extend: {},
  },
  plugins: [],
};

