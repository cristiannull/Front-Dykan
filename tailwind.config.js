/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "Dykan-pri": {
          DEFAULT: "#64218C",
          50: "#BE83E2",
          100: "#B672DE",
          200: "#A451D6",
          300: "#9331CE",
          400: "#7C29AD",
          500: "#64218C",
          600: "#44165F",
          700: "#230C31",
          800: "#030104",
          900: "#000000",
          950: "#000000",
        },
        "Dykan-Fondo": {
          DEFAULT: "#202124",
          50: "#767A85",
          100: "#6D707A",
          200: "#5A5C65",
          300: "#46494F",
          400: "#33353A",
          500: "#202124",
          600: "#060606",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
