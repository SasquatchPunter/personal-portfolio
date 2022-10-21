/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        inherit: "inherit",
      },
      fontFamily: {
        kanit: ["Kanit"],
      },
      boxShadow: {
        "inner-xl": "inset 0 0 1em",
      },
      borderRadius: {
        inherit: "inherit",
      },
      height: {
        screen: "100vh",
        "screen-1/4": "25vh",
        "screen-1/2": "50vh",
        "screen-3/4": "75vh",
        "screen-1/5": "20vh",
        "screen-2/5": "40vh",
        "screen-3/5": "60vh",
        "screen-4/5": "80vh",
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    dropShadow: {
      "text-title": ["2px 2px 0 black", "-2px -2px 0 theme(colors.pink.500)"],
      "icon-sm": "2px 2px 5px black",
    },
  },
  plugins: [],
};
