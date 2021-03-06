const colors = require("tailwindcss/colors");
module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.js',
  ],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "1xl": "1.5rem",
      "2xl": "1.625rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    fontFamily: {
      rotonda: ["RotondaC", "Arial", "Helvetica", "sans-serif"],
    },
    screens: {
      xl: "1280px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "2rem",
        "2xl": "6rem",
      },
    },
    extend: {
      zIndex: {
        "5": "5",
        "1": "1",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
      backgroundSize: {
        "100%": "100%",
        "40": "10rem",
        "80": "20rem",
        "160": "40rem",
      },
      borderWidth: {
        "3": "3px",
        "7": "7px",
      },
      padding: { "fluid-video": "56.25%", "100%": "100%" },
      backgroundImage: (theme) => ({
        frame: "url('/images/frame.png')",
      }),
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      green: colors.green,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: {
        50: "#fffae5",
        100: "#fff6cc",
        200: "#fff1b2",
        300: "#ffec99",
        400: "#ffe880",
        500: "#ffe366",
        600: "#ffde4d",
        700: "#ffda33",
        800: "#ffd51a",
        900: "#ffd200",
      },
      orange: {
        50: "#f5e7dc",
        100: "#f5dac4",
        200: "#f5ccab",
        300: "#f5bf93",
        400: "#f5b17a",
        500: "#f5a462",
        600: "#f59749",
        700: "#f58931",
        800: "#f58122",
        900: "#f56e00",
      },
      darkOrange: {
        50: "#ede0d5",
        100: "#edd3be",
        200: "#edc6a6",
        300: "#edb98e",
        400: "#edac77",
        500: "#ed9f5f",
        600: "#ed9247",
        700: "#ed852f",
        800: "#ed7818",
        900: "#ed6d06",
      },
    },
  },
  variants: {
    extend: {
      // ...
      inset: ["active", "hover", "focus"],
      borderWidth: ['last'],
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
