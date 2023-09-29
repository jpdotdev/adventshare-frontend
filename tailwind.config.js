/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dragon: "url('./assets/dragon.jpg')",
      },
    },
    fontFamily: {
      CinzelDeco: "Cinzel Decorative",
      Fauna: "Fauna One",
      Cinzel: "Cinzel",
    },
    colors: {
      asred: "#DB3838",
      trgray: "RGBA(68, 68, 68, .54)",
      beige: "#B4A388",
      dkpurple: "#26212d",
    },
  },
  plugins: [],
};
