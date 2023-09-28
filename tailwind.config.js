/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dragon: "url('./assets/dragon.jpg')",
      },
    },
    colors: {
      asred: "#DB3838",
      trgray: "RGB(155, 155, 155, .54)",
    },
  },
  plugins: [],
};
