/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/hero-bg.png')",
        "about-bg": "url('/src/assets/images/aboutBg.png')",
        "join-bg": "url('/src/assets/images/download.png')",
        "vid-bg": "url('/src/assets/images/vid.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customGreen: "#093731",
        customLiteGreen: "#179778",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 20s linear infinite",
      },
    },
  },
  plugins: [],
};





