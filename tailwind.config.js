const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 1px 0 10px;
      textShadow: {
        sm: "3px 1px 2px var(--tw-shadow-color)",
        DEFAULT: "3px 1px 4px var(--tw-shadow-color)",
        md: "3px 1px 4px var(--tw-shadow-color)",
        lg: "3px 1px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
