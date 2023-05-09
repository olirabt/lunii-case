/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "3rem",
      screens: {
        DEFAULT: "100%",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    fontSize: {
      sm: "14px",
      md: "24px",
    },
    fontWeight: {
      normal: "500",
      bold: "700",
    },
    colors: {
      transparent: "rgba(0,0,0,0)",
      primary400: "#80ABCF",
      primary500: "#3F96F3",
      primary600: "#2F76D2",
      secondary500: "#FCEB4F",
      neutral0: "#FFFFFF",
      neutral900: "#000000",
      alert400: "#FFCFD5",
      alert500: "#983E4C",
      validate400: "#C6EBD4",
      validate500: "#31784B",
    },
  },
};

