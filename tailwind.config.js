/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        kermit: "url('../src/assets/kermit.jpg')",
        kermit2: "url('../src/assets/kermit2.jpg')",
      },
      fontFamily: {
        custom: ['Sofia Sans', "sans-serif"],
      },
    },
  },
  plugins: [],
};
