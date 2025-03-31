/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/heroBg.png')",
        "about-bg": "url('/src/assets/images/aboutBg.png')",
        "join-bg": "url('/src/assets/images/joinBg.png')",
        "product-bg": "url('/src/assets/images/productHero.png')",

      },
      fontFamily: {
        urbanist: ["Urbanist"],
        outfit: ["Outfit"],
      },
      colors: {
        customBlue: "#322F69",
        customSkyblue: "#0AAEF0",
        customWhite: "#FFFFFF",
        cardBlue: "#EEF9FE",
      },
    },
  },
  plugins: [],
};
