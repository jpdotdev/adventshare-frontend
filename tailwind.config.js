/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dragon: "url('./assets/dragon.jpg')",
        adventurers: "url('./assets/adventurers.jpg')",
        castle: "url('./assets/castle.jpg')",
        challenger: "url('./assets/challenger.jpg')",
      },
    },
    fontFamily: {
      CinzelDeco: "Cinzel Decorative",
      Fauna: "Fauna One",
      Cinzel: "Cinzel",
    },
    colors: {
      asred: "#DB3838",
      trgray: "RGBA(155, 155, 155, .54)",
      beige: "#B4A388",
      dkpurple: "#26212d",
      hYellow: "#E6B464",
    },
  },
  plugins: [],
};
