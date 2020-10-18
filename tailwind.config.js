module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      "./src/**/*.js",
    ],
  },

  theme: {
    extend: {
      fontFamily: {
        metro: ["MetropolisRegular"],
        nunito: ["Nunito"],
      },
    },
  },
  variants: {},
  plugins: [],
};
