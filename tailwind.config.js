/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-prime": "#23AA49",
        "theme-second": "#FF324B",
        "theme-light": "#F1F1F5",
        "theme-grey": "#979899",
        "theme-dark": "#06161C",
      },
      boxShadow: {
        theme:
          "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        "theme-hover":
          "rgba(145, 158, 171, 0.35) 0px 0px 4px 0px, rgba(145, 158, 171, 0.2) 0px 36px 52px -6px",
      },
    },
  },
  plugins: [],
};
