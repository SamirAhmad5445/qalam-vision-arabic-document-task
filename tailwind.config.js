/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#daebff",
          200: "#beddff",
          300: "#91c8ff",
          400: "#5daafd",
          500: "#3787fa",
          600: "#2f71f0",
          700: "#1952dc",
          800: "#1b42b2",
          900: "#1c3c8c",
          950: "#162655",
        },
      },
      fontFamily: {
        inter: ["Inter-var", "sans-serif"],
      },
    },
  },
  plugins: [],
};
