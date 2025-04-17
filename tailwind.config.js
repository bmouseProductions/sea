// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".btn-primary": {
          "@apply bg-blue-500 text-white font-bold py-2 px-4 rounded": {},
        },
        ".card-shadow": {
          "@apply shadow-lg p-4 rounded-lg bg-white": {},
        },
      });
    }),
  ],
};