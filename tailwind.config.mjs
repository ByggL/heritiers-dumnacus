/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      hOrange: "#F19401",
      hGreen: "#75BA03",
      hGrey: "#D1D7DA",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      rotis: "Rotis",
      richard: "Poor Richard",
      richardbold: "Poor Richard Bold",
      pandion: "Pandion",
      balgruf: "Balgruf",
      droid: "Droid Sans",
    },
  },
  plugins: [],
};
