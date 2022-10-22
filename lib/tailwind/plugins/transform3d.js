const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ matchUtilities, theme, addBase, addUtilities }) {
    addBase({
      "*": {
        "--tw-translate-z": 0,
        "--tw-rotate-z": 0,
      },
      "::before": {
        "--tw-translate-z": 0,
        "--tw-rotate-z": 0,
      },
      "::after": {
        "--tw-translate-z": 0,
        "--tw-rotate-z": 0,
      },
    });

    /* Perspective */
    matchUtilities(
      {
        perspective: (value) => ({
          perspective: value,
        }),
      },
      { supportsNegativeValues: true, values: theme("perspective") }
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
    addUtilities({
      ".transform-3d": {
        transform:
          "translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z))",
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
