/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#28A745",
        customBlack: "#000000",
        customWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
