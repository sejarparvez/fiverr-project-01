/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        gray: "#d0d0d0",
        black: "#323232",
        blue: {
          100: "#187cb1",
          200: "#0860c6",
        },
        cyan: {
          100: "#6ac9ff",
          200: "#26b9f1",
        },
      },
    },
  },
  plugins: [],
};
