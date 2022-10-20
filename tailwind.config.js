/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
  },
  plugins: [],
};
