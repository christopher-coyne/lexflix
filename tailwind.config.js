const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      pink: "#E40066",
      midnightPurple: "#12131B",
      darkPurple: "#20254E",
      yellow: "#EAC435",
      fontLightBlue: "#B6C5E2",
      fontDarkBlue: "#2B4579",
      lightPink: "#FF9CC8",
      inputBlue: "#20345A",
      white: "#FFFFFF",
      gradientEndPurple: "#0D1029",
      gradientEndPink: "#B30656",
      messageDarkBlue: "#161936",
    },
    extend: {
      fontFamily: {
        ubuntu: "Ubuntu, serif",
        oxygen: "Oxygen, serif",
        lobster: "Lobster, serif",
      },
    },
  },
  plugins: [],
};
