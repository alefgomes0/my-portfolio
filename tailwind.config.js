/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MetropolisBold: "metropolisbold",
        MetropolisSemibold: "metropolissemibold",
        MetropolisMedium: "metropolismedium",
        MetropolisRegular: "metropolisregular",
        MetropolisLight: "metropolislight",
        MetropolisThin: "metropolisthin",
        Inconsolata: "inconsolata",
      }
    }
  },
  plugins: [],
}