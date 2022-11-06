/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#3DDC97",
          2: "#46237A",
          3: "#256EFF",
        },
      },
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
      width: {
        inherit: "inherit",
      },
      height: {
        inherit: "inherit",
        screen: "100vh",
        "screen-1/4": "25vh",
        "screen-1/2": "50vh",
        "screen-3/4": "75vh",
        "screen-1/5": "20vh",
        "screen-2/5": "40vh",
        "screen-3/5": "60vh",
        "screen-4/5": "80vh",
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
      rotate: {
        20: "20deg",
        15: "15deg",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fadein: "fadein 1000ms ease-in-out",
      },
    },
  },
  plugins: [require("./lib/tailwind/plugins/transform3d")],
};
