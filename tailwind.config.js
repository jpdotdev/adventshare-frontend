/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      mainHeader: "min(8vw, 5rem)",
      h1: "min(9vw, 6rem)",
      h2: "min(5vw, 3rem)",
      h3: "min(4vw, 2rem)",
      h4: "min(3vw, 2rem)",
      p1: "min(4vw, 1.5rem)",
      p2: "min(2.5vw, 1.3rem)",
      p3: "min(2.7vw, 1.3rem)",
      p4: "min(3vw, 1.5rem)",
      p5: "min(3vw, 1.3rem)",
      buttonMain: "min(2.5vw, 1.2rem)",
    },
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
      dkgray: "RGBA(25, 26, 41, .54)",
      beige: "#B4A388",
      dkpurple: "#26212d",
      hYellow: "#E6B464",
    },
  },
  plugins: [],
};
