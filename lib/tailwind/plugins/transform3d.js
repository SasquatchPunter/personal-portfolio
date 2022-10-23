const plugin = require("tailwindcss/plugin");

const defaultVars = {
  "--tw-translate-z": "0",
  "--tw-rotate-x": "0",
  "--tw-rotate-y": "0",
  "--tw-rotate-z": "0",
  "--tw-scale-z": "1",
};

module.exports = plugin(
  function ({ matchUtilities, theme, addBase, addUtilities }) {
    /* Plugin Variables */
    addBase({
      "*, ::before, ::after": defaultVars,
    });

    /* Perspective */
    matchUtilities(
      {
        perspective: (value) => ({
          perspective: value,
        }),
      },
      {
        supportsNegativeValues: true,
        values: theme("perspective"),
      }
    );

    /* Perspective Origin */
    matchUtilities(
      {
        "perspective-origin": (value) => ({
          "perspective-origin": value,
        }),
      },
      { values: theme("perspectiveOrigin") }
    );

    /* Transform 3D */
    const translate3d =
      "translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z))";
    const rotate3d =
      "rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z))";
    const scale3d =
      "scale3d(var(--tw-scale-x), var(--tw-scale-y), var(--tw-scale-z))";
    const skew = "skew(var(--tw-skew-x), var(--tw-skew-y))";
    const transform = [translate3d, rotate3d, scale3d, skew].join(" ");
    addUtilities({
      ".transform-3d": {
        transform,
      },
    });

    /* Transform Style */
    matchUtilities(
      {
        transform: (value) => ({
          "transform-style": value,
        }),
      },
      { values: theme("transformStyle") }
    );

    /* Rotate */
    matchUtilities(
      {
        "rotate-x": (value) => ({
          "--tw-rotate-x": value,
        }),
        "rotate-y": (value) => ({
          "--tw-rotate-y": value,
        }),
        "rotate-z": (value) => ({
          "--tw-rotate-z": value,
        }),
      },
      { supportsNegativeValues: true, values: theme("rotate") }
    );

    /* Translate */
    matchUtilities(
      {
        "translate-x": (value) => ({
          "--tw-translate-x": value,
        }),
        "translate-y": (value) => ({
          "--tw-translate-y": value,
        }),
        "translate-z": (value) => ({
          "--tw-translate-z": value,
        }),
      },
      { supportsNegativeValues: true, values: theme("spacing") }
    );

    /* Scale */
    matchUtilities(
      {
        "scale-x": (value) => ({
          "--tw-scale-x": value,
        }),
        "scale-y": (value) => ({
          "--tw-scale-y": value,
        }),
        "scale-z": (value) => ({
          "--tw-scale-z": value,
        }),
      },
      { supportsNegativeValues: true, values: theme("scale") }
    );
  },
  {
    theme: {
      perspective: {
        none: "none",
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
      },
      transformStyle: {
        preserve: "preserve-3d",
        flat: "flat",
      },
      perspectiveOrigin: {
        c: "center",
        t: "top",
        l: "left",
        b: "bottom",
        r: "right",
        "t-r": "top right",
        "t-l": "top left",
        "b-r": "bottom right",
        "b-l": "bottom left",
      },
      rotate: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        45: "45deg",
        90: "90deg",
        135: "135deg",
        180: "180deg",
        225: "225deg",
        270: "270deg",
        315: "315deg",
        360: "360deg",
      },
    },
  }
);
