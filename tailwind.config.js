module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d6a21d",
        "primary-light": "#d6c41d",
        "primary-dark": "#d6861d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
