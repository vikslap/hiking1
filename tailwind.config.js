/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["'Josefin Sans'", "sans-serif"],
        karla: ["'Karla'", "sans-serif"],
        public: ["'Public Sans'", "sans-serif"],
      },
      colors: {
        burnt: {
          DEFAULT: "#D65F02",
          dark: "#B84E00",     // hover
          darker: "#933F00",   // active
        },
        shadow: "#4D4318",
      },
    },
  },
  plugins: [],
};
